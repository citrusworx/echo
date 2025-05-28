import {useRef, useEffect} from 'react';

export function useDraggable() {
    const ref = useRef<HTMLDivElement | null>(null);
    const pos = useRef({x: 0, y: 0});

    useEffect(()=>{
        const el = ref.current;
        if(!el){
            return;
        }

        let isDragging = false;
        let startX = 0;
        let startY = 0;
        
        const handleMouseDown = (e: MouseEvent) => {
            isDragging = true;
            startX = e.clientX - pos.current.x;
            startY = e.clientY - pos.current.y;

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            pos.current.x = e.clientX - startX;
            pos.current.y = e.clientY - startY;
            el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
        }

        const handleMouseUp = (e: MouseEvent) => {
            isDragging = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
        }

        el.addEventListener('mousedown', handleMouseDown);

        return () => {
            el.removeEventListener('mousedown', handleMouseDown);
        }

    }, []);

    return ref;
}