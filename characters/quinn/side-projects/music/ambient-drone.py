#!/usr/bin/env python3
"""
ambient-drone.py — 生成一段极简环境音景
Quinn 的第一次音乐尝试 🎵

Generates a WAV file with layered sine waves + gentle modulation.
"""

import struct
import math
import wave
from datetime import datetime

SAMPLE_RATE = 44100
AMPLITUDE = 0.3
DURATION = 30  # seconds

def sine_wave(freq, duration, sample_rate=SAMPLE_RATE):
    """Generate a sine wave"""
    n_samples = int(sample_rate * duration)
    return [math.sin(2 * math.pi * freq * t / sample_rate) for t in range(n_samples)]

def fade_in_out(samples, fade_samples=2000):
    """Apply fade in/out"""
    result = samples[:]
    for i in range(min(fade_samples, len(result))):
        result[i] *= i / fade_samples
    for i in range(max(0, len(result) - fade_samples), len(result)):
        result[i] *= (len(result) - i) / fade_samples
    return result

def tremolo(samples, rate=4, depth=0.3):
    """Apply gentle tremolo (volume modulation)"""
    return [s * (1 - depth/2 + depth/2 * math.sin(2 * math.pi * rate * i / SAMPLE_RATE))
            for i, s in enumerate(samples)]

def mix(tracks, weights=None):
    """Mix multiple tracks together"""
    if weights is None:
        weights = [1.0] * len(tracks)
    max_len = max(len(t) for t in tracks)
    result = [0.0] * max_len
    for track, weight in zip(tracks, weights):
        for i in range(len(track)):
            result[i] += track[i] * weight
    # Normalize
    max_val = max(abs(s) for s in result) or 1
    return [s / max_val * AMPLITUDE for s in result]

def float_to_pcm(samples):
    """Convert float samples to 16-bit PCM"""
    return b''.join(struct.pack('<h', int(s * 32767 * 0.8)) for s in samples)

def generate_ambient():
    """Generate a layered ambient drone piece"""
    print("🎵 Generating ambient drone...")
    
    # Layer 1: Deep drone (C2 = 65.41 Hz)
    print("  Layer 1: drone C2")
    drone1 = sine_wave(65.41, DURATION)
    drone1 = tremolo(drone1, rate=0.3, depth=0.2)
    drone1 = fade_in_out(drone1)
    
    # Layer 2: Fifth (G2 = 98.00 Hz)
    print("  Layer 2: fifth G2")
    drone2 = sine_wave(98.00, DURATION)
    drone2 = tremolo(drone2, rate=0.5, depth=0.15)
    drone2 = fade_in_out(drone2)
    
    # Layer 3: Higher partial (C4 = 261.63 Hz)
    print("  Layer 3: partial C4")
    partial1 = sine_wave(261.63, DURATION)
    partial1 = tremolo(partial1, rate=0.8, depth=0.3)
    partial1 = fade_in_out(partial1, fade_samples=4000)
    
    # Layer 4: Subtle shimmer (G4 = 392.00 Hz)
    print("  Layer 4: shimmer G4")
    partial2 = sine_wave(392.00, DURATION)
    partial2 = tremolo(partial2, rate=1.2, depth=0.4)
    partial2 = fade_in_out(partial2, fade_samples=4000)
    
    # Layer 5: Slow modulation (near 0.1 Hz LFO)
    print("  Layer 5: modulation sweep")
    sweep = [math.sin(2 * math.pi * 0.1 * t / SAMPLE_RATE) * 0.1
             for t in range(int(SAMPLE_RATE * DURATION))]
    # Nothing audible, just a control signal — skip this
    
    # Mix
    print("  Mixing...")
    mixed = mix([drone1, drone2, partial1, partial2], [0.6, 0.4, 0.2, 0.1])
    
    # Convert to PCM
    print("  Encoding...")
    pcm_data = float_to_pcm(mixed)
    
    # Write WAV
    output_path = "works/side-projects/music/ambient-drone-c2.wav"
    import os
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with wave.open(output_path, 'w') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        wf.writeframes(pcm_data)
    
    file_size = os.path.getsize(output_path) / 1024
    print(f"\n✅ Generated: {output_path}")
    print(f"   Duration: {DURATION}s · Size: {file_size:.0f} KB")
    print(f"   Key: C minor drone with G fifth and shimmer")
    print(f"\n🎶 听感描述：深沉的C2低音持续，上方G2第五度音轻微起伏，")
    print(f"    C4和G4泛音层像月光一样微微闪烁。适合写代码时循环播放。")

if __name__ == "__main__":
    generate_ambient()
