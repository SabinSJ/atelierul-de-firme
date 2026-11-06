type Props = {
  image: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProductImageZoom({
  image,
  title,
  isOpen,
  onClose,
}: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="max-h-[85vh] max-w-full rounded-lg object-contain"
        />

        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 rounded-md bg-black/60 px-3 py-2 text-sm font-medium text-white hover:text-[#00c6ff]"
        >
          Închide ✕
        </button>
      </div>
    </div>
  );
}
