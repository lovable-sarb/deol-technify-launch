const clients = [
  "GrowthScale Inc.", "DataFlow Systems", "NexaHub", "LogiTech Solutions",
  "VoiceFirst AI", "ShopWave", "TechVentures", "CloudPeak",
];

const ClientLogos = () => (
  <section className="py-16 px-4 border-y border-border/40 bg-muted/30" aria-label="Trusted by companies">
    <div className="container mx-auto">
      <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
        Trusted by innovative companies
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {clients.map((name) => (
          <div
            key={name}
            className="text-lg md:text-xl font-display font-bold text-muted-foreground/40 hover:text-primary/60 transition-colors select-none"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
