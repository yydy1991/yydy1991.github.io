import {Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder} from "@babylonjs/core";

class BabylonApp {
    canvas;

    constructor(containerId) {
        let canvas = this.initCanvas(containerId);

        Engine.prototype._updateSize = () => {}
        let engine = new Engine(canvas, true, {
            disableAutoSize: true   // ✅ 禁止 Babylon 自动设置 width 和 height
        }, true);
        let scene = new Scene(engine);

        let camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        let light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        let sphere = MeshBuilder.CreateSphere("sphere", {diameter: 1}, scene);

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }

    initCanvas(containerId) {
        let canvas;
        if (containerId instanceof HTMLElement) {
            canvas = containerId;
        } else {
            canvas = document.getElementById(containerId); // 对应于HTML中的<canvas>元素
        }

        if (!canvas) {
            throw new Error("Canvas not exist, please specify a canvas element.");
        }
        this.canvas = canvas;
        return canvas;
    }
}

export {
    BabylonApp
}
