import {Masonry} from "antd";
import {useEffect, useState, useRef} from "react";

type TImage = {
  id: number;
  src: {
    medium: string;
    large: string;
  };
};

const MasonryComponent = () => {
  const [images, setImages] = useState<TImage[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fetchImages = async (pageToLoad: number) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?per_page=30&page=${pageToLoad}`,
        {
          headers: {
            Authorization: import.meta.env.VITE_PEXELS_API_KEY,
          },
        },
      );

      const result = await response.json();

      setImages((prev) => [...prev, ...result.photos]);
      setPage(pageToLoad + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchImages(page);
        }
      },
      {threshold: 0.1},
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [page, loading]);

  return (
    <>
      <Masonry
        columns={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        gutter={16}
        items={images.map((img) => ({
          key: img.id,
          data: img.src.medium,
        }))}
        itemRender={({data}) => (
          <img
            loading="lazy"
            src={data}
            style={{width: "100%", borderRadius: "8px"}}
          />
        )}
      />

      <div ref={loaderRef} style={{height: 50}}>
        {loading && <p>Загрузка...</p>}
      </div>
    </>
  );
};

export default MasonryComponent;
