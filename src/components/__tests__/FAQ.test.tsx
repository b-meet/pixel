import { render, screen, fireEvent } from '@testing-library/react';
import { FAQ } from '../FAQ';

// Mock SectionHeading to isolate testing of FAQ component
jest.mock('../ui/SectionHeading', () => ({
    SectionHeading: ({ title }: { title: string }) => <div>{title}</div>
}));

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
        button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('FAQ Component', () => {
    it('renders the FAQ heading correctly', () => {
        render(<FAQ />);
        expect(screen.getByText(/Best Tattoo Studio in Surat – Frequently Asked Questions/i)).toBeInTheDocument();
    });

    it('renders FAQ questions', () => {
        render(<FAQ />);
        // Check for at least one question (e.g. the first one)
        expect(screen.getByText(/Why is Pixel Tattoo considered the best tattoo studio in Surat/i)).toBeInTheDocument();
        expect(screen.getByText(/Does Pixel Tattoo offer safe name and couple tattoos in Surat/i)).toBeInTheDocument();
    });

    it('expands an FAQ item when clicked', () => {
        render(<FAQ />);
        
        // Find a question
        const question = screen.getByText(/Why is Pixel Tattoo considered the best tattoo studio in Surat/i);
        const detailsElement = question.closest('details');
        
        // Initially it is open (openIndex default is 0)
        expect(detailsElement).toHaveAttribute('open');

        // Click to close
        fireEvent.click(question);
        expect(detailsElement).not.toHaveAttribute('open');

        // Click to open again
        fireEvent.click(question);
        expect(detailsElement).toHaveAttribute('open');
    });

    it('injects JSON-LD schema', () => {
        const { container } = render(<FAQ />);
        const script = container.querySelector('script[type="application/ld+json"]');
        expect(script).toBeInTheDocument();
        expect(script?.innerHTML).toContain('FAQPage');
        expect(script?.innerHTML).toContain('Question');
    });

    it('has correct accessibility attributes', () => {
        render(<FAQ />);
        const summary = screen.getAllByRole('button')[0]; // The first FAQ summary
        
        // Initial state (first item is open by default)
        expect(summary).toHaveAttribute('aria-expanded', 'true');
        expect(summary).toHaveAttribute('aria-controls', expect.stringContaining('faq-content-0'));
        
        // Click to close
        fireEvent.click(summary);
        expect(summary).toHaveAttribute('aria-expanded', 'false');
    });

    it('renders the WhatsApp CTA section', () => {
        render(<FAQ />);
        expect(screen.getByText(/Still have questions\?/i)).toBeInTheDocument();
        expect(screen.getByText(/Book your tattoo consultation on WhatsApp now/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Message on WhatsApp/i })).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<FAQ />);
        expect(asFragment()).toMatchSnapshot();
    });
});
