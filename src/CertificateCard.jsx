function CertificateCard({ image, title, description, link }) {
  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col flex-shrink-0 basis-1/2 md:basis-1/3
                 max-w-[50%] md:max-w-[33.333%]
                 bg-[#0B0F19] border border-[#8B5CF6]/30
                 rounded-xl overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-[#E5E7EB] line-clamp-2">
          {title}
        </h3>
        <p className="mt-auto text-sm text-gray-400 line-clamp-2">
          {description}
        </p>
        {/* Optional "View" button */}
        <div className="mt-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white border border-[#8B5CF6] rounded-full">
            View
          </span>
        </div>
      </div>
    </a>
  );
}

export default CertificateCard;
