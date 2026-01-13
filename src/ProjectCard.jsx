function ProjectCard({ image, title, description, link }) {
  return (
    <div
      className="
        min-w-[220px] sm:min-w-[260px]
        bg-[#2b2c2f]
        rounded-lg
        shadow
        flex-shrink-0
      "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
      />

      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base font-semibold mb-1">{title}</h3>

        <p className="text-xs sm:text-sm text-gray-300 mb-3 line-clamp-3">
          {description}
        </p>

        <a
          href={link}
          className="
            inline-block
            text-xs sm:text-sm
            px-3 py-1.5
            bg-white text-black
            rounded-md
          "
        >
          View
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
