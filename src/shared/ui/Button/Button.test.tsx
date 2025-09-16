import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button (light tests)', () => {
    it('рендерится с ролью button и текстом', () => {
        render(<Button>Buy</Button>);
        expect(screen.getByRole('button', { name: /buy/i })).toBeInTheDocument();
    });

    it('прокидывает нативные пропсы', () => {
        render(
            <Button disabled title="hint">
                Off
            </Button>,
        );
        const btn = screen.getByRole('button', { name: /off/i });
        expect(btn).toBeDisabled();
        expect(btn).toHaveAttribute('title', 'hint');
    });

    it('variant/size добавляют ожидаемые базовые утилиты (точечные проверки)', () => {
        render(<Button variant="destructive" size="icon" aria-label="del" />);
        const btn = screen.getByRole('button', { name: /del/i });
        expect(btn.className).toContain('bg-destructive');
        expect(btn.className).toContain('size-9');
    });

    it('мерджит className (последний выигрывает в группе)', () => {
        render(<Button className="px-1">Pad</Button>);
        const btn = screen.getByRole('button', { name: /pad/i });
        expect(btn.className).toContain('px-1');
    });

    it('asChild переносит классы/атрибуты на дочерний элемент', () => {
        render(
            <Button asChild>
                <a href="/go">Go</a>
            </Button>,
        );
        const link = screen.getByRole('link', { name: /go/i });
        expect(link).toHaveAttribute('href', '/go');
        expect(link).toHaveAttribute('data-slot', 'button');
        expect(link.className).toMatch(/bg-|text-|h-|px-/); // лёгкая проверка
    });

    it('вызов onClick, если не disabled', () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Click</Button>);
        const btn = screen.getByRole('button', { name: /click/i });
        fireEvent.click(btn);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('не вызывает onClick, если disabled', () => {
        const onClick = vi.fn();
        render(
            <Button onClick={onClick} disabled>
                Click
            </Button>,
        );
        const btn = screen.getByRole('button', { name: /click/i });
        fireEvent.click(btn);
        expect(onClick).toHaveBeenCalledTimes(0);
    });
});
