interface YTVideoProps {
  url: string;
  width?: number;
  height?: number;
}

export default function YTVideo({
  url,
  width = 200,
  height = 200,
}: YTVideoProps) {
  const videoId = url.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      width={width}
      height={height}
      src={embedUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
}
