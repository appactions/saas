import React, { useEffect, useRef } from 'react';
import MiniGL from './minigl';

function normalizeColor(hexCode) {
    return [((hexCode >> 16) & 255) / 255, ((hexCode >> 8) & 255) / 255, (255 & hexCode) / 255];
}

class Gradient {
    constructor(height, colors) {
        this.height = height;
        this.playing = false;
        this.density = [0.06, 0.16];
        this.colors = colors
            .map(hex => {
                //Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.
                if (4 === hex.length) {
                    const hexTemp = hex
                        .substr(1)
                        .split('')
                        .map(hexTemp => hexTemp + hexTemp)
                        .join('');
                    hex = `#${hexTemp}`;
                }
                return hex && `0x${hex.substr(1)}`;
            })
            .filter(Boolean)
            .map(normalizeColor);
    }

    createMaterial = () => {
        const fragment = `
        
float f(in vec2 p)
{
    return sin(p.x+sin(p.y+u_time*0.1)) * sin(p.y*p.x*0.1+u_time*0.2);
}

vec2 field(in vec2 p)
{
	vec2 ep = vec2(.05,0.);
    vec2 rz= vec2(0);
	for( int i=0; i<7; i++ )
	{
		float t0 = f(p);
		float t1 = f(p + ep.xy);
		float t2 = f(p + ep.yx);
        vec2 g = vec2((t1-t0), (t2-t0))/ep.xx;
		vec2 t = vec2(-g.y,g.x);
        
        p += .9*t + g*0.3;
        rz= t;
	}
    
    return rz;
}

void main()
{
	vec2 p = gl_FragCoord.xy / resolution.xy-0.5;
	p.x *= resolution.x/resolution.y;
    p *= 10.;
	
    vec2 fld = field(p);
    vec3 col = sin(vec3(-.3,0.1,0.5)+fld.x-fld.y)*0.65+0.35;
    col = mix(col,vec3(fld.x,-fld.x,fld.y),smoothstep(0.75,1.,sin(u_time*0.4)))*0.85;
	gl_FragColor = vec4(col,1.0);
}
            `;

        const vertex = `
            
        
        
        vec3 blendNormal(vec3 base, vec3 blend) {
            return blend;
            }
            
            vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
            return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
            }
            
            
            
            
            
            
            varying vec3 v_color;
            
            void main() {
            //   float time = u_time * u_global.noiseSpeed;
              float time = u_time;
            
            //   vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;
            
              vec2 st = 1. - uvNorm.xy;
            
              //
              // Tilting the plane
              //
            
              // Front-to-back tilt
              float tilt = resolution.y / 2.0 * uvNorm.y;
            
              // Left-to-right angle
              float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;
            
              // Up-down shift to offset incline
              float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);
            
              
              vec3 pos = vec3(
                position.x,
                position.y + tilt + incline - offset,
                position.z
              );
            
            //   gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
              gl_Position = vec4(pos, 1.0);
            }
        `;

        this.uniforms = {
            u_time: new this.minigl.Uniform({
                value: 0,
            }),
            u_vertDeform: new this.minigl.Uniform({
                value: {
                    incline: new this.minigl.Uniform({
                        value: Math.sin(this.angle) / Math.cos(this.angle),
                    }),
                    offsetTop: new this.minigl.Uniform({
                        value: -0.5,
                    }),
                    offsetBottom: new this.minigl.Uniform({
                        value: -0.5,
                    }),
                    noiseFreq: new this.minigl.Uniform({
                        value: [3, 4],
                        type: 'vec2',
                    }),
                    noiseAmp: new this.minigl.Uniform({
                        value: this.amp,
                    }),
                    noiseSpeed: new this.minigl.Uniform({
                        value: 10,
                    }),
                    noiseFlow: new this.minigl.Uniform({
                        value: 3,
                    }),
                    noiseSeed: new this.minigl.Uniform({
                        value: this.seed,
                    }),
                },
                type: 'struct',
                excludeFrom: 'fragment',
            }),
        };

        return new this.minigl.Material(vertex, fragment, this.uniforms);
    };

    init = el => {
        this.minigl = new MiniGL(el, null, null, true);

        this.material = this.createMaterial();
        this.geometry = new this.minigl.PlaneGeometry();
        this.mesh = new this.minigl.Mesh(this.geometry, this.material);

        this.playing = true;

        this.resize();
        requestAnimationFrame(this.animate);
        window.addEventListener('resize', this.resize);
    };

    resize = () => {
        this.width = window.innerWidth;
        this.minigl.setSize(this.width, this.height);
        this.minigl.setOrthographicCamera();
        this.xSegCount = Math.ceil(this.width * this.density[0]);
        this.ySegCount = Math.ceil(this.height * this.density[1]);
        this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount);
        this.mesh.geometry.setSize(this.width, this.height);
    };

    animate = delta => {
        if (0 !== this.last && this.isStatic) {
            this.minigl.render();
            this.disconnect();
            return;
        }

        if (!this.shouldSkipFrame(delta)) {
            this.t += Math.min(delta / 250 - this.last, 1e3 / 15);
            this.last = delta / 250;
            this.mesh.material.uniforms.u_time.value = this.t;
            this.minigl.render();
        }

        if (this.playing) {
            requestAnimationFrame(this.animate);
        }
    };

    shouldSkipFrame = delta => {
        return !!window.document.hidden || !this.playing || parseInt(delta, 10) % 2 === 0;
    };

    disconnect = () => {
        window.removeEventListener('resize', this.resize);
    };
}

export default function GradientBackground({ height = 600, colors, style = {} }) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const gradient = new Gradient(height, colors);

        gradient.init(ref.current);

        window.gradient = gradient;

        return () => gradient.disconnect();
    }, [ref.current]);

    return (
        <canvas
            ref={ref}
            style={{ width: '100vw', height, maxWidth: '100%', position: 'absolute', zIndex: -100, ...style }}
        />
    );
}
