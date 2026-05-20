const publications = [
  {
    number: "01",

    title:
      "Exploring CNN-Based Algorithms for Human Action Recognition in Videos",

    domain: "Computer Vision & Deep Learning",

    venue:
      "Springer Nature Switzerland • BROADNETS 2024 • LNICST Volume 602",

    status: "Published • Scopus Indexed",

    doi: "10.1007/978-3-031-81171-5_11",

    eid: "2-s2.0-85219192326",

    description:
      "Comparative research evaluating Two-Stream CNN, CNN + LSTM, and 3D CNN architectures using the HMDB-51 dataset for intelligent human action recognition in video sequences.",

    findings:
      "3D CNN demonstrated the highest accuracy and computational efficiency by directly learning spatiotemporal representations without relying on separate spatial and temporal processing pipelines.",

    tags: [
      "CNN",
      "3D CNN",
      "Computer Vision",
      "HMDB-51",
      "Deep Learning",
    ],
  },

  {
    number: "02",

    title:
      "Solar Flare Prediction Using Machine Learning and Deep Learning Techniques",

    domain: "Space Weather Prediction & AI",

    venue: "Scopus Indexed Research Publication",

    status: "Published • Scopus Indexed",

    doi: "Scopus Indexed",

    eid: "2-s2.0-105034141640",

    description:
      "Research focused on forecasting solar flare activity using machine learning and deep learning models trained on scientific space weather datasets and temporal solar observations.",

    findings:
      "The study demonstrated that deep learning-based predictive models can effectively identify complex nonlinear solar activity patterns and improve the reliability of solar flare forecasting.",

    tags: [
      "Machine Learning",
      "Predictive Modeling",
      "Space Weather",
      "Deep Learning",
      "Scientific AI",
    ],
  },

  {
    number: "03",

    title:
      "Machine Learning-Based Detection and Mitigation of Privilege Escalation Attacks in Cloud Environments",

    domain: "Cybersecurity & Cloud Intelligence",

    venue: "Research Publication",

    status: "Under Publication • January 2025",

    doi: "Under Publication",

    eid: "Pending",

    description:
      "Research addressing insider threats and privilege escalation attacks in cloud environments using behavioral anomaly detection, machine learning classification, and intelligent threat mitigation techniques.",

    findings:
      "The proposed model achieved 98.94% binary classification accuracy and 98.92% multiclass classification accuracy through behavioral modeling, SMOTE-based data balancing, feature engineering, and hyperparameter optimization.",

    tags: [
      "Cybersecurity",
      "Cloud Security",
      "SMOTE",
      "Anomaly Detection",
      "Machine Learning",
    ],
  },
];

const ResearchSection = () => {
  return (
    <section className="research-section relative overflow-hidden bg-black py-20 md:py-32">
      {/* Background Glow */}
      <div className="research-bg-glow absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[120px] md:h-[700px] md:w-[700px] md:blur-[160px]" />

      <div className="research-container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="research-heading-wrapper mb-14 md:mb-24" data-animate="fade-up">
          <p className="research-label mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-5">
            Research Publications
          </p>

          <h2 className="research-heading text-3xl font-black leading-none tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Published
            <br />
            Research
          </h2>
        </div>

        {/* Research Cards */}
        <div className="research-list flex flex-col gap-8 md:gap-14">
          {publications.map((paper, index) => (
            <div
              key={index}
              data-animate="fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
              className="
                research-card
                group
                relative
                overflow-hidden
                rounded-2xl md:rounded-[2rem]
                border
                border-white/10
                bg-white/[0.03]
                p-5 sm:p-7 md:p-10
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-neon-primary/30
                hover:bg-white/[0.05]
              "
            >
              {/* Hover Glow */}
              <div className="research-card-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="research-card-content relative z-10">
                {/* Top Row */}
                <div className="research-top-row flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="research-main-content">
                    <p className="research-number mb-4 text-5xl font-black tracking-[-0.08em] text-white/10 md:mb-5 md:text-7xl">
                      {paper.number}
                    </p>

                    <p className="research-domain mb-3 text-xs uppercase tracking-[0.22em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-4">
                      {paper.domain}
                    </p>

                    <h3 className="research-title max-w-4xl text-2xl font-black leading-tight tracking-[-0.03em] text-white sm:text-3xl md:text-5xl">
                      {paper.title}
                    </h3>

                    <p className="research-venue mt-5 break-words text-base text-white/60 md:mt-6 md:text-lg">
                      {paper.venue}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="research-metadata flex min-w-0 flex-col gap-4 rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl sm:p-6 lg:max-w-xs">
                    <div>
                      <p className="research-meta-label text-xs uppercase tracking-[0.25em] text-white/40">
                        DOI
                      </p>

                      <p className="research-meta-value mt-2 break-all text-sm text-neon-primary">
                        {paper.doi}
                      </p>
                    </div>

                    <div>
                      <p className="research-meta-label text-xs uppercase tracking-[0.25em] text-white/40">
                        Scopus EID
                      </p>

                      <p className="research-meta-value mt-2 break-all text-sm text-white/70">
                        {paper.eid}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="research-description mt-8 max-w-4xl text-base leading-relaxed text-white/70 md:mt-10 md:text-lg">
                  {paper.description}
                </p>

                {/* Findings */}
                <div className="research-findings mt-7 rounded-2xl border border-neon-primary/20 bg-neon-primary/[0.03] p-5 sm:p-6 md:mt-8">
                  <p className="research-findings-label mb-3 text-xs uppercase tracking-[0.3em] text-neon-primary/70">
                    Key Findings
                  </p>

                  <p className="research-findings-text text-base leading-relaxed text-white/80 md:text-lg">
                    {paper.findings}
                  </p>
                </div>

                {/* Tags */}
                <div className="research-tags mt-8 flex flex-wrap gap-3">
                  {paper.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="research-tag rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metrics */}
        <div className="research-metrics-grid mt-12 grid gap-4 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-6">
          {[
            ["2", "Scopus Indexed Papers"],
            ["1", "Verified Citation"],
            ["1", "h-index"],
            ["ORCID", "0009-0009-6572-8661"],
          ].map((item, index) => (
            <div
              key={index}
              data-animate="zoom-in"
              style={{ transitionDelay: `${index * 70}ms` }}
              className="research-metric-card rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <h3 className="research-metric-value text-3xl font-black text-neon-primary">
                {item[0]}
              </h3>

              <p className="research-metric-label mt-3 text-sm uppercase tracking-[0.2em] text-white/60">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
