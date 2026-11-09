export default function Testimonials({ testimonials }) {
  return (
    <div className="testi-grid" data-stagger>
      {testimonials.map((t, i) => (
        <figure className="testi-card" key={i}>
          <blockquote className="testi-quote">{t.quote}</blockquote>
          <figcaption>
            <p className="testi-author">{t.author}</p>
            <p className="testi-role">{t.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
