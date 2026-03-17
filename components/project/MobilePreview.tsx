'use client';
import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

interface MobilePreviewProps {
  url: string;
  buttonText?: string;
  className?: string;
}

export function MobilePreview({ url, buttonText = "Mobile Preview", className = "" }: MobilePreviewProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className={`gap-2 h-10 sm:h-12 px-6 sm:px-8 rounded-md font-bold text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 ${className}`}>
          <Smartphone className="w-4 h-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      
      {/* Background ko thoda blur aur transparent rakha hai jisse premium feel aaye */}
      <DialogContent className="max-w-[400px] bg-transparent border-none shadow-none flex justify-center p-0 pt-6">
        <DialogTitle className="sr-only">Mobile Preview</DialogTitle>
        {/* Mobile Mockup Frame */}
        <div className="relative w-[320px] h-[650px] bg-black rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden ring-4 ring-gray-800">
          
          {/* Top Notch (iPhone style) */}
          <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-2xl w-32 mx-auto z-10 flex justify-center items-center gap-2">
            <div className="w-12 h-1 bg-gray-800 rounded-full"></div> {/* Speaker grill */}
          </div>

          {/* Website ko Iframe ke andar load karenge */}
          <iframe 
            src={url} 
            className="w-full h-full bg-white rounded-[2.5rem] pt-6" // pt-6 takki notch content ko chupaye na
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms" // Security ke liye useful
          />
        </div>
        
      </DialogContent>
    </Dialog>
  );
}
