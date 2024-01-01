import React, { useState, useRef } from "react";
import mp3 from "./audio1.mp3";
import "./AudioStyle.css";
import { Link } from "react-router-dom";

let animationController;

export default function AudioVisualiser() {
  const [file, setFile] = useState<File | null>(null);
  const canvasRef = useRef<any>();
  const audioRef = useRef<any>();
  const source = useRef<any>();
  const analyzer = useRef<any>();

  const handleAudioPlay = () => {
    let audioContext = new AudioContext();
    if (!source.current) {
      source.current = audioContext.createMediaElementSource(audioRef.current);
      analyzer.current = audioContext.createAnalyser();
      source.current.connect(analyzer.current);
      analyzer.current?.connect(audioContext.destination);
      analyzer.current.fftSize = 2048;
    }
    visualizeData();
  };
  const visualizeData = () => {
    animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current.paused) {
      return cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(140);
    analyzer.current.getByteFrequencyData(songData);
    const bar_width = 3;
    let start = 0;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      ctx.save();
      ctx.translate(canvasRef.current.width / 2, canvasRef.current.height / 2);
      ctx.rotate(i + (Math.PI * 2) / songData.length);
      // compute x coordinate where we would draw
      start = i * 4;
      let barheight = songData[i] * 2;
      const red = (i * barheight) / 20;
      const green = i * 4;
      const blue = barheight / 2;
      ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
      ctx.fillRect(0, 0, bar_width, -songData[i]);
      ctx.restore();
    }
  };

  return (
    <div className="AudioVisualiser">
      <audio
        id="audio"
        ref={audioRef}
        onPlay={handleAudioPlay}
        src={mp3}
        controls
      />

      <canvas id="canvas" ref={canvasRef} width={500} height={200} />
      <Link to="/">Back home</Link>
    </div>
  );
}
