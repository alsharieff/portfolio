function CertificateCard(props) {
  return (
    <a
      href={props.link || "#"}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col flex-shrink-0 basis-1/2 md:basis-1/3
                 max-w-[50%] md:max-w-[33.333%]
                 bg-slate-900/60 backdrop-blur border border-white/15
                 rounded-xl overflow-hidden
                 hover:border-white/30 hover:bg-slate-900/70
                 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] w-full bg-black/40 overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover group-hover:scale-[1.03]
                     transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-white line-clamp-2">
          {props.title}
        </h3>

        {/* Description pinned to bottom */}
        <p className="mt-auto text-[13px] text-gray-200/90 line-clamp-2">
          {props.description}
        </p>
      </div>
    </a>
  );
}

export default CertificateCard;
