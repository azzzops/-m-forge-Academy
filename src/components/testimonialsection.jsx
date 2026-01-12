import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";
import testimonial4 from "../assets/testimonial4.jpg";
import testimonial5 from "../assets/testimonial5.jpg";
import testimonial6 from "../assets/testimonial6.jpg";

const testimonials = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 m-auto max-w-2xl">
          <h2 className="text-sm font-medium text-center tracking-wide text-muted-foreground">
            TESTIMONIALS &amp; SUCCESS STORIES
          </h2>
          <h3 className="mt-2 text-center text-3xl font-semibold text-foreground">
            What Students Say
          </h3>
        </div>
      </div>

      {/* Infinite slideshow */}
      <div className="relative">
        <div className="flex w-max animate-testimonial-marquee gap-6 px-4">
          {[...testimonials, ...testimonials].map((img, idx) => (
            <div
              key={idx}
              className="glass-card-2 rounded-radius p-3 w-[320px] shrink-0"
            >
              <img
                src={img}
                alt="Student testimonial screenshot"
                className="w-full h-auto rounded-[calc(var(--radius)-4px)] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
