import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('halloween');

  const events = {
    halloween: {
      name: "Halloween",
      images: [
        "/gallery/halloween/DSC_0745_compressed.jpg",
        "/gallery/halloween/DSC_0750_compressed.jpg",
        "/gallery/halloween/DSC_0757_compressed.jpg",
        "/gallery/halloween/DSC_0759_compressed.jpg",
        "/gallery/halloween/DSC_0762_compressed.jpg",
        "/gallery/halloween/DSC_0769_compressed.jpg",
        "/gallery/halloween/DSC_0772_compressed.jpg",
        "/gallery/halloween/DSC_0775_compressed.jpg",
        "/gallery/halloween/DSC_0776_compressed.jpg",
        "/gallery/halloween/DSC_0779_compressed.jpg",
        "/gallery/halloween/DSC_0780_compressed.jpg",
        "/gallery/halloween/DSC_0786_compressed.jpg",
        "/gallery/halloween/DSC_0797_compressed.jpg",
        "/gallery/halloween/DSC_0799_compressed.jpg",
        "/gallery/halloween/DSC_0801_compressed.jpg",
        "/gallery/halloween/DSC_0802_compressed.jpg",
        "/gallery/halloween/DSC_0803_compressed.jpg",
        "/gallery/halloween/DSC_0804_compressed.jpg",
        "/gallery/halloween/DSC_0807_compressed.jpg",
        "/gallery/halloween/DSC_0810_compressed.jpg",
        "/gallery/halloween/DSC_0812_compressed.jpg",
        "/gallery/halloween/DSC_0813_compressed.jpg",
        "/gallery/halloween/DSC_0816_compressed.jpg",
        "/gallery/halloween/DSC_0817_compressed.jpg",
        "/gallery/halloween/DSC_7318_compressed.jpg",
        "/gallery/halloween/DSC_7320_compressed.jpg",
        "/gallery/halloween/DSC_7322_compressed.jpg",
        "/gallery/halloween/DSC_7325_compressed.jpg",
        "/gallery/halloween/DSC_7329_compressed.jpg",
        "/gallery/halloween/DSC_7345_compressed.jpg",
      ]
    },
    event2: {
      name: "Big Little",
      images: [
        '/gallery/BigLittle/DSC_5189_compressed.jpg',
        '/gallery/BigLittle/DSC_5195_compressed.jpg',
        '/gallery/BigLittle/DSC_5205_compressed.jpg',
        '/gallery/BigLittle/DSC_5210_compressed.jpg',
        '/gallery/BigLittle/DSC_5221_compressed.jpg',
        '/gallery/BigLittle/DSC_5239_compressed.jpg',
        '/gallery/BigLittle/DSC_9649_compressed.jpg',
        '/gallery/BigLittle/DSC_9653_compressed.jpg',
        '/gallery/BigLittle/DSC_9658_compressed.jpg',
        '/gallery/BigLittle/DSC_9669_compressed.jpg',
        '/gallery/BigLittle/DSC_9692_compressed.jpg',
        '/gallery/BigLittle/DSC_9698_compressed.jpg',
        '/gallery/BigLittle/DSC_9773_compressed.jpg',
        '/gallery/BigLittle/DSC_9796_compressed.jpg',
        '/gallery/BigLittle/DSC_9844_compressed.jpg',
        '/gallery/BigLittle/DSC_9857_compressed.jpg',
        '/gallery/BigLittle/DSC_9951_compressed.jpg',
        '/gallery/BigLittle/DSC_9964_compressed.jpg',
        '/gallery/BigLittle/DSC_9966_compressed.jpg',
        '/gallery/BigLittle/DSC_9967_compressed.jpg',
        '/gallery/BigLittle/DSC_9969_compressed.jpg',
        '/gallery/BigLittle/DSC_9977_compressed.jpg',
        '/gallery/BigLittle/DSC_9980_compressed.jpg',
        '/gallery/BigLittle/DSC_9985_compressed.jpg',
        '/gallery/BigLittle/DSC_9992_compressed.jpg',
        '/gallery/BigLittle/DSC_9995_compressed.jpg',
        '/gallery/BigLittle/DSC_9998_compressed.jpg'
      ]
    },
    event3: {
      name: "Winterfest",
      images: [
        '/gallery/Winterfest/DSC_1837_compressed.jpg',
        '/gallery/Winterfest/DSC_1844_compressed.jpg',
        '/gallery/Winterfest/DSC_1852_compressed.jpg',
        '/gallery/Winterfest/DSC_1864_compressed.jpg',
        '/gallery/Winterfest/DSC_1868_compressed.jpg',
        '/gallery/Winterfest/DSC_1892_compressed.jpg',
        '/gallery/Winterfest/DSC_1899_compressed.jpg',
        '/gallery/Winterfest/DSC_1902_compressed.jpg',
        '/gallery/Winterfest/DSC_1907_compressed.jpg',
        '/gallery/Winterfest/DSC_1910_compressed.jpg',
        '/gallery/Winterfest/DSC_1916_compressed.jpg',
        '/gallery/Winterfest/DSC_1928_compressed.jpg',
        '/gallery/Winterfest/DSC_1943_compressed.jpg',
        '/gallery/Winterfest/DSC_1952_compressed.jpg',
        '/gallery/Winterfest/DSC_1985_compressed.jpg',
        '/gallery/Winterfest/DSC_2032_compressed.jpg',
        '/gallery/Winterfest/DSC_2049_compressed.jpg',
        '/gallery/Winterfest/DSC_2099_compressed.jpg',
        '/gallery/Winterfest/DSC_2104_compressed.jpg',
        '/gallery/Winterfest/DSC_2117_compressed.jpg',
        '/gallery/Winterfest/DSC_2159_compressed.jpg',
        '/gallery/Winterfest/DSC_9389_compressed.jpg',
        '/gallery/Winterfest/DSC_9390_compressed.jpg',
        '/gallery/Winterfest/DSC_9399_compressed.jpg',
        '/gallery/Winterfest/DSC_9401_compressed.jpg',
        '/gallery/Winterfest/DSC_9460_compressed.jpg',
        '/gallery/Winterfest/DSC_9468_compressed.jpg',
        '/gallery/Winterfest/DSC_9476_compressed.jpg',
        '/gallery/Winterfest/DSC_9486_compressed.jpg',
        '/gallery/Winterfest/DSC_9523_compressed.jpg'
      ]
    },
    event4: {
      name: "Egg Waffle GBM",
      images: [
        '/gallery/egg-waffle-gbm/DSC_3267_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3274_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3281_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3284_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3288_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3289_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3292_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3300_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3304_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3305_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3306_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3311_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3314_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3321_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3329_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3335_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3339_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3344_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3353_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3357_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3362_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3364_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3365_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3366_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3372_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3373_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3376_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3399_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3409_compressed.jpg',
        '/gallery/egg-waffle-gbm/DSC_3410_compressed.jpg'
      ]
    }
  };

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {Object.entries(events).map(([key, event]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === key
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {event.name}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {events[activeTab].images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="mb-4 w-full rounded-xl break-inside-avoid"
          />
        ))}
      </div>
    </div>
  );
}
