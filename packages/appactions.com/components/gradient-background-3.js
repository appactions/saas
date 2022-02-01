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
varying vec2 v_texcoord;

void main() {
  //  float time = u_time;

  float tilt = resolution.y / 2.0 * uvNorm.y;

  vec3 pos = vec3(
    position.x,
    position.y + tilt,
    position.z
  );

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_texcoord = uv;
}
`;

    const fragment = `
varying vec2 v_texcoord;

void main() {
    vec3 l = mix(bl, tl, v_texcoord.t);
    vec3 r = mix(br, tr, v_texcoord.t);
    vec3 c = mix(l, r, v_texcoord.s);
    gl_FragColor = vec4(c, 1);
}
`;

const tl = [254/255, 217/255, 138/255];
const tr = [252/255, 252/255, 252/255];
const bl = [ 18/255, 139/255, 184/255];
const br = [203/255,  79/255, 121/255];

    const uniforms = {
        u_time: new this.minigl.Uniform({
            value: 0,
        }),
        tl: new this.minigl.Uniform({
            value: tl,
            type: 'vec3',
        }),
        tr: new this.minigl.Uniform({
            value: tr,
            type: 'vec3',
        }),
        bl: new this.minigl.Uniform({
            value: bl,
            type: 'vec3',
        }),
        br: new this.minigl.Uniform({
            value: br,
            type: 'vec3',
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

        this.createMaterial = createMaterial;
        this.materialArgs = materialArgs;
    }

    init = el => {
        this.minigl = new MiniGL(el, null, null, console.log);

        this.material = this.createMaterial(this.materialArgs);
        this.geometry = new this.minigl.PlaneGeometry();
        this.mesh = new this.minigl.Mesh(this.geometry, this.material);
        this.mesh.geometry.setTopology(2, 2);
        // this.mesh.wireframe = true;

        this.playing = true;

        this.resize();
        requestAnimationFrame(this.animate);
        window.addEventListener('resize', this.resize);
    };

    resize = () => {
        this.width = window.innerWidth;
        this.minigl.setSize(this.width, this.height);
        this.minigl.setOrthographicCamera();
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
