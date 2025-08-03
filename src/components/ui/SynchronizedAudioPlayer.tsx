import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";

interface TranscriptEntry {
  startTime: number;
  endTime: number;
  speaker: string;
  text: string;
}

interface SynchronizedAudioPlayerProps {
  audioSrc: string;
  onClose?: () => void;
}

export const SynchronizedAudioPlayer = ({ audioSrc, onClose }: SynchronizedAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [currentTranscriptIndex, setCurrentTranscriptIndex] = useState(-1);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Parse transcript from text file
  useEffect(() => {
    const loadTranscript = async () => {
      try {
        const response = await fetch('/anuj_eng.txt');
        const text = await response.text();
        const entries = parseTranscript(text);
        setTranscript(entries);
      } catch (error) {
        console.error('Failed to load transcript:', error);
      }
    };
    loadTranscript();
  }, []);

  // Parse transcript text into structured data
  const parseTranscript = (text: string): TranscriptEntry[] => {
    const lines = text.split('\n').filter(line => line.trim());
    const entries: TranscriptEntry[] = [];
    
    for (let i = 0; i < lines.length; i += 3) {
      const timeLine = lines[i];
      const textLine = lines[i + 1];
      
      if (timeLine && textLine) {
        const timeMatch = timeLine.match(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3}) \[(.*?)\]/);
        if (timeMatch) {
          const [, startTimeStr, endTimeStr, speaker] = timeMatch;
          const startTime = parseTimeToSeconds(startTimeStr);
          const endTime = parseTimeToSeconds(endTimeStr);
          
          entries.push({
            startTime,
            endTime,
            speaker: speaker.trim(),
            text: textLine.trim()
          });
        }
      }
    }
    
    return entries;
  };

  // Convert time string to seconds
  const parseTimeToSeconds = (timeStr: string): number => {
    const [time, milliseconds] = timeStr.split(',');
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds + Number(milliseconds) / 1000;
  };

  // Update current time and find current transcript
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      
      // Find current transcript entry
      const currentEntry = transcript.findIndex(entry => 
        currentTime >= entry.startTime && currentTime <= entry.endTime
      );
      setCurrentTranscriptIndex(currentEntry);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [currentTime, transcript]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = (Number(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-large">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm text-muted-foreground">Live AI Call Recording</div>
        {onClose && (
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ×
          </button>
        )}
      </div>

      {/* Audio Controls */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlayPause}
          className="h-12 w-12 rounded-full bg-primary text-white hover:bg-primary/90"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        
        <div className="flex-1">
          <input
            type="range"
            min="0"
            max="100"
            value={duration ? (currentTime / duration) * 100 : 0}
            onChange={handleSeek}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Volume2 className="w-4 h-4" />
          <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
      </div>

      {/* Transcript Display */}
      <div className="bg-muted/30 rounded-xl p-4 max-h-96 overflow-y-auto">
        <div className="space-y-4">
          {transcript.map((entry, index) => (
            <div
              key={index}
              className={`flex gap-3 p-3 rounded-lg transition-all duration-300 ${
                index === currentTranscriptIndex 
                  ? 'bg-primary/10 border border-primary/20 shadow-sm' 
                  : 'opacity-60'
              }`}
            >
              <div className={`w-2 h-2 rounded-full mt-2 ${
                entry.speaker === 'Scalysis AI' ? 'bg-primary' : 'bg-accent'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">
                  {entry.speaker} • {formatTime(entry.startTime)}
                </p>
                <p className={`${
                  index === currentTranscriptIndex ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}>
                  {entry.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          🎯 Real customer conversation • AI-powered call analysis
        </p>
      </div>
    </div>
  );
};