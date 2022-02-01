import React, { useEffect, useRef } from 'react';
import MiniGL from './minigl';

function hexColorToNumber(hex) {
    //Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.
    if (4 === hex.length) {
        const hexTemp = hex
            .substr(1)
            .split('')
            .map(hexTemp => hexTemp + hexTemp)
            .join('');
        hex = `#${hexTemp}`;
    }

    return `0x${hex.substr(1)}`;
}

function normalizeColor(hexCode) {
    return [((hexCode >> 16) & 255) / 255, ((hexCode >> 8) & 255) / 255, (255 & hexCode) / 255];
}

function createMulticolorMaterial({ colors }) {
    colors = colors.map(hexColorToNumber).map(normalizeColor);

    const vertex = `
void main() {
  //  float time = u_time;

  float tilt = resolution.y / 2.0 * uvNorm.y;

  vec3 pos = vec3(
    position.x,
    position.y + tilt,
    position.z
  );

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

    const fragment = `
varying vec3 v_color;

void main() {
  vec3 color = vec3(1,0,1);
  gl_FragColor = vec4(color, 1.0);
}
`;

    const uniforms = {
        u_time: new this.minigl.Uniform({
            value: 0,
        }),
    };

    return new this.minigl.Material(vertex, fragment, uniforms);
}

class Gradient {
    constructor({ createMaterial, materialArgs, height }) {
        this.height = height;
        this.playing = false;
        this.time = 1253106;
        this.last = 0;

        this.density = [0.06, 0.16];
        this.angle = 0;
        this.seed = 5;
        this.amp = 320;
        this.freqX = 14e-5;
        this.freqY = 29e-5;

        this.createMaterial = createMaterial;
        this.materialArgs = materialArgs;
    }

    init = el => {
        this.minigl = new MiniGL(el, null, null, console.log);

        this.material = this.createMaterial(this.materialArgs);
        this.geometry = new this.minigl.PlaneGeometry();
        this.mesh = new this.minigl.Mesh(this.geometry, this.material);
        this.mesh.wireframe = true;

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
            this.time += Math.min(delta - this.last, 1e3 / 15);
            this.last = delta;
            this.mesh.material.uniforms.u_time.value = this.time;
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

        const gradient = new Gradient({ createMaterial: createMulticolorMaterial, materialArgs: { colors }, height });

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
