import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Layout from '../layouts/layout';
import SingleDeveloper from '../components/developer/single_developer';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Developers = () => {
  const { developers, error } = useSelector((state) => state.developer);

  return (
    <Layout>
      <div className="devs">
        <h1 className="title">Developer List</h1>
        <p className="desc">Please select a developer</p>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={2}
          loop
          loopFillGroupWithBlank
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30,
            },
          }}
        >
          {!error && developers
            ? developers.map((developer) => (
              <SwiperSlide key={developer.id}>
                <SingleDeveloper developer={developer} />
              </SwiperSlide>
            ))
            : 'No developers found'}
        </Swiper>
      </div>
    </Layout>
  );
};

export default Developers;
