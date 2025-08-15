'use client';

import { useState, useRef, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';



// Available photos from the public/photos directory
const availablePhotos = [
  '/photos/WX20250815-032950@2x.png',
  '/photos/live_photo_paired_photo_CC7E640C-7D95-49D5-8018-B6DC0055DB05.JPG',
  '/photos/62cf2a3ddd812ab67a4274c86f395687.JPG',
  '/photos/2288bedfe870cd9c938ab93b2ff86d4f.JPG',
  '/photos/35939e347b942e3f894f3189e80212cc.JPG',
  '/photos/ed32dcfb611c6b7f8be49eea13f4cf56.JPG',
  '/photos/fb127d136dfa2e145560aa86fdccd5a3.JPG',
  '/photos/f428856f4446d02ad955618201e35f31.JPG',
  '/photos/IMG_8693.JPG',
  '/photos/IMG_8448.JPG',
  '/photos/380d623ccc83bd731b88cfa5d54f7e88.JPG',
  '/photos/IMG_1472.jpg', // 11
  '/photos/IMG_1383.jpg',
  '/photos/IMG_1456.jpg',
  '/photos/IMG_1459.jpg',
  '/photos/IMG_3143.jpg',
  '/photos/IMG_3229.jpg',
  '/photos/5bb86654a8f37b852f913bc1c5af3788.jpg',
  '/photos/8d62b79402664953cbc5545b3d5d9112.jpg',
  '/photos/f9d3869cb4b79b6d2341c8ca92a33600.JPG',
  '/photos/0c71c2d65a9c31c5c41f8ecc5c8eab1a.JPG',
  '/photos/DSCF0055.JPG'
];

// Photo layout configurations for each page
const photoLayouts = [
  // Page 1: Happy Birthday
  [
    { src: availablePhotos[0], top: '15%', left: '10%', width: '300px', height: '225px', rotation: '15deg' },
    { src: availablePhotos[1], top: '15%', right: '15%', width: '270px', height: '210px', rotation: '-10deg' },
    { src: availablePhotos[2], bottom: '5%', left: '20%', width: '240px', height: '180px', rotation: '5deg' },
    { src: availablePhotos[3], bottom: '10%', right: '25%', width: '285px', height: '217.5px', rotation: '-8deg' },
    { src: availablePhotos[10], top: '5%', right: '50%', width: '285px', height: '240px', rotation: '-5deg' }
  ],
  // Page 2: Another Year Older
  [
    { src: availablePhotos[4], top: '20%', left: '5%', width: '255px', height: '195px', rotation: '-12deg' },
    { src: availablePhotos[5], top: '10%', right: '10%', width: '300px', height: '232.5px', rotation: '18deg' },
    { src: availablePhotos[6], bottom: '12.5%', left: '15%', width: '277.5px', height: '210px', rotation: '-5deg' },
    { src: availablePhotos[7], bottom: '10%', right: '20%', width: '225px', height: '172.5px', rotation: '12deg' }
  ],
  // Page 3: Special Day
  [
    { src: availablePhotos[8], top: '10%', left: '12.5%', width: '292.5px', height: '225px', rotation: '-15deg' },
    { src: availablePhotos[9], top: '15%', right: '5%', width: '262.5px', height: '202.5px', rotation: '8deg' },
    { src: availablePhotos[11], bottom: '20%', left: '10%', width: '240px', height: '187.5px', rotation: '-3deg' },
    { src: availablePhotos[12], bottom: '5%', right: '15%', width: '315px', height: '240px', rotation: '20deg' }
  ],
  // Page 4: Birthday Wishes
  [
    { src: availablePhotos[13], top: '5%', left: '15%', width: '270px', height: '210px', rotation: '10deg' },
    { src: availablePhotos[14], top: '10%', right: '20%', width: '285px', height: '217.5px', rotation: '-18deg' },
    { src: availablePhotos[15], bottom: '20%', left: '10%', width: '255px', height: '195px', rotation: '7deg' },
    { src: availablePhotos[16], bottom: '15%', right: '10%', width: '300px', height: '232.5px', rotation: '-12deg' }
  ],
  // Page 5: Party Time
  [
    { src: availablePhotos[17], top: '15%', left: '10%', width: '277.5px', height: '210px', rotation: '-8deg' },
    { src: availablePhotos[18], top: '15%', right: '15%', width: '262.5px', height: '202.5px', rotation: '15deg' },
    { src: availablePhotos[19], bottom: '10%', left: '15%', width: '292.5px', height: '225px', rotation: '-5deg' },
    { src: availablePhotos[20], bottom: '12.5%', right: '17.5%', width: '240px', height: '187.5px', rotation: '18deg' },
    { src: availablePhotos[21], top: '5%', right: '50%', width: '240px', height: '187.5px', rotation: '-8deg' }
  ]
];

// Updated interface to include photo layout
interface BirthdayPage {
  id: number;
  title: string;
  message: string;
  backgroundColor: string;
  photoLayout: Array<{
    src: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    width: string;
    height: string;
    rotation: string;
  }>;
}

const birthdayPages: BirthdayPage[] = [
  {
    id: 1,
    title: "余思燚 Happy Birthday 🎉",
    message: "在首页上面我先祝你在新的一岁里能一样有一颗少女心，<br />尽情的去享受这世间一切的美。<br />在为数不多青春里去做自己想做的事情，去成为自己想成为的人，<br />去爱自己最爱的人，去成为自己想成为的自己。<br />踏入20岁是人生的第三个十年的开始，<br />在这十年里我们会慢慢的开始担起一些童年不用承担责任，<br />去解决一些童年不用解决的问题。<br />我相信余思燚你一定可以做到在人生接下来十年的里程碑里创造出属于你自己的奇迹。",
    backgroundColor: "bg-gradient-to-br from-pink-400 to-purple-500",
    photoLayout: photoLayouts[0]
  },
  {
    id: 2,
    title: "我的内心",
    message: "时间过的很快，不管是从我们在一起到现在还是从相识到现在，<br />时间流逝的速度难以想象，仔细回想起来，<br />在仅仅刚开始在一起一个多月里我们就有了那么多难忘的回忆，每天我们待彼此如初。<br />当我们劳累了一天回到家里看到对方的那一刻，就感觉好像这一天里所有的经历，<br />无论好与坏，已经无所谓了。<br />我很感动你在我忙得不可开交的时候能给我煮上一锅香喷喷的家常饭，<br />也非常感谢你会因为我作息不规律而强行督促我早睡！<br />感觉跟你在一起的生活过的很融洽，没有我想象中的那种生活磨合期， <br /> 感觉我们在生活中的习惯有很多共同之处，并且也能想到在生活中对方的想法。<br /> 即使偶尔有争吵，我们也能迅速且有效率的解决问题，<br />这也说明了我们彼此都会时刻惦记着对方，希望在有异议的时候可以互相理解。<br /> 有时候我也有我的问题，会惹你不开心，但是每次跟你沟通完我都会记得，慢慢改掉<br />因为我们的本意都是希望能和对方在感情里长久，发现问题就解决问题。<br />我真的很感激能在大学期间结交到每天每刻都在照顾我，想着我，惦记着我的人。<br />有你的这一个学期，我感觉每天过的很有盼头，<br />希望能早点回家见到那天每时每刻都想着怎么对我好的人。<br />遇到你是我最幸运的事情。<br />这也证明了只要我坚持我自己的想法，总能找到那个对的人。<br />我们之间的相遇就是一种缘分，在一种机缘巧合之下我们相识，相爱，在一起。<br />我希望真的能有一天，我们走出校园还是手牵着手，<br />直到我们老去，直到我们死去，直到我们化作尘埃，直到我们变成星星，<br />我们还是手牵着手，直到我们下辈子再次相遇。<br />在人生里遇到你不容易，我很感谢且很珍惜我们的相遇。",
    backgroundColor: "bg-gradient-to-br from-blue-400 to-cyan-500",
    photoLayout: photoLayouts[1]
  },
  {
    id: 3,
    title: "我们的故事",
    message: "我自己是怎么都不会想到，在24年第一次因为保险讲座的相遇，<br />铺垫了我们之后的感情。<br />还记得那天，我们一起走在回家路上显得非常尴尬，一路上都在尬聊，<br />当时你在公家车上为了不显尴尬坐在了我旁边，<br />我是怎么都不会想到在未来的一天你会躺在我身边。<br /> 你圣诞节前第一次给我送蛋糕，我当时特别感谢，<br />尤其是在我一天心情特别不好的时候，写上一句对我转天考试的祝福，<br />于是我把那个让我考试超常发挥的盒子珍藏了起来。<br /> 就是那次，我就有种预感，感觉以后可能会跟这个在一起，<br />没想到预感成真了哈哈哈哈哈。<br />再到后来你陆陆续续地给我们送甜品，也让我感觉到了你的贴心照顾，<br />你会因为看我吃的不好而给我顺便带一些你们做的甜品。<br />在我的生日那天作为策划小能手的你帮我精心策划了我的生日，<br />让我很惊讶，因为真的很惊喜，而且也很隐蔽。<br />你当时送给我的生日礼物，有你亲自给我修的照片，<br />也有你亲自写的一份很长很长的信，我看完之后鼻子酸酸的，<br />希望有一天能遇到一个这么有心，细心，善于观察人心的女孩降临到我身边，<br />好消息是，我好像遇到了。<br />在后面 Spring 的时候我能感觉到你很浓很浓的爱意，关心，和照顾。<br />于是我也想抓住这个机会和你多接触接触，<br />从你经常在我晚上很晚下课的时候舍弃和朋友一起happy 的时间给我送饭，<br />再到慢慢的跟大家出去玩，再到单独私底下去约会。<br />你并没有在你看不到我的表示的时候放弃，也就是这个时候我觉得我可以对她负责。<br /> 你改变了我很多想法，你的一句“即使失败，也不要错过” 让我感觉到了你的不一样，<br />也给力我勇气让我把未来结果过抛开，去和我喜欢的人在一起。<br />于是我们在五月二号在一起了。",
    backgroundColor: "bg-gradient-to-br from-green-400 to-teal-500",
    photoLayout: photoLayouts[2]
  },
  {
    id: 4,
    title: "我们的路途",
    message: "每一次跟你旅游都有不一样的感受，<br />在每次出去玩，为数不多可以抛开烦恼时间里，<br />我们都能和彼此体验到一些新的时候，每次就像是一个新的冒险，很期待，<br />在这段时间里我们也借此机会更加的了解彼此。<br />每一次出去玩我们都会有不一样的体验，和同样的人体验不同的事情，收获不同的照片。<br />也许重点不在于去哪里或者干什么，而是跟谁去。<br />我觉得我更喜欢的是跟你一起去任何地方，做任何事情。<br />每一次出去旅行都会有不同的回忆，而这些回忆会是我们在一起最宝贵的东西，也是我们感情的见证<br />希望我们能一直走下去，一直走下去。",
    backgroundColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
    photoLayout: photoLayouts[3]
  },
  {
    id: 5,
    title: "最后",
    message: "我很开心我能遇到一个我心目中最好的女孩，<br />我们能在对方开心的时候一起陪对方笑，<br />对方难过时候，跟对方一起分担情绪，<br />在对方遇到困难的时候，一起解决问题，<br />在与对方争吵之后，可以互相理解，<br />在对方犯错的时候，去包容对方，鼓励对方去改变。<br />希望在未来的日子里我们可以互相学习，一起进步，成为我们心目中最完美的一对！<br />最后，祝你20岁生日快乐！",
    backgroundColor: "bg-gradient-to-br from-red-400 to-pink-500",
    photoLayout: photoLayouts[4]
  }
];

export default function BirthdayWebsite() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % birthdayPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + birthdayPages.length) % birthdayPages.length);
  };

  // Touch/swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => prevPage(),
    trackMouse: false,
    delta: 50,
    swipeDuration: 500,
  });

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const offset = currentX - dragStartX;
    setDragOffset(offset);
  }, [isDragging, dragStartX]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    const threshold = 100;
    
    if (dragOffset > threshold) {
      prevPage();
    } else if (dragOffset < -threshold) {
      nextPage();
    }
    
    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  }, [isDragging]);

  return (
    <div 
      className="w-screen h-screen bg-black overflow-hidden"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0
      }}
    >
      {/* Page indicator */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-3">
          {birthdayPages.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentPage ? 'bg-white scale-125 shadow-lg' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows - Transparent with hover effects */}
      <button
        onClick={prevPage}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 text-white font-bold rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border-2 border-white/50"
        style={{ 
          width: '96px', 
          height: '96px',
          left: '32px',
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(165, 175, 193, 0.46)';
          const arrow = e.currentTarget.querySelector('span');
          if (arrow) {
            arrow.style.color = 'white';
            arrow.style.transform = 'rotate(15deg)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          const arrow = e.currentTarget.querySelector('span');
          if (arrow) {
            arrow.style.color = 'black';
            arrow.style.transform = 'rotate(0deg)';
          }
        }}
      >
        <span 
          className="transition-all duration-300"
          style={{ 
            color: 'black',
            fontSize: '72px',
            fontWeight: 'bold',
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            lineHeight: '1'
          }}
        >
          ‹
        </span>
      </button>
      
      <button
        onClick={nextPage}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 text-white font-bold rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border-2 border-white/50"
        style={{ 
          width: '96px', 
          height: '96px',
          right: '32px',
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(165, 175, 193, 0.46)';
          const arrow = e.currentTarget.querySelector('span');
          if (arrow) {
            arrow.style.color = 'white';
            arrow.style.transform = 'rotate(-15deg)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          const arrow = e.currentTarget.querySelector('span');
          if (arrow) {
            arrow.style.color = 'black';
            arrow.style.transform = 'rotate(0deg)';
          }
        }}
      >
        <span 
          className="transition-all duration-300"
          style={{ 
            color: 'black',
            fontSize: '72px',
            fontWeight: 'bold',
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            lineHeight: '1'
          }}
        >
          ›
        </span>
      </button>

      {/* Main content */}
      <div 
        {...handlers}
        ref={containerRef}
        className="absolute inset-0 w-screen h-screen overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 w-screen h-screen">
          {birthdayPages.map((page, index) => (
            <div
              key={page.id}
              className={`absolute inset-0 w-screen h-screen transition-all duration-700 ease-in-out ${
                index === currentPage
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
              style={{
                transform: index === currentPage && isDragging 
                  ? `translateX(${dragOffset * 0.3}px)` 
                  : undefined,
                background: index === 0 ? 'linear-gradient(135deg, #f472b6, #a855f7)' :
                           index === 1 ? 'linear-gradient(135deg, #60a5fa, #06b6d4)' :
                           index === 2 ? 'linear-gradient(135deg, #4ade80, #14b8a6)' :
                           index === 3 ? 'linear-gradient(135deg, #fbbf24, #f97316)' :
                           'linear-gradient(135deg, #f87171, #ec4899)'
              }}
            >
              {/* Multiple photos scattered across the page */}
              {page.photoLayout.map((photo, photoIndex) => (
                <div
                  key={photoIndex}
                  className="absolute"
                  style={{
                    top: photo.top,
                    bottom: photo.bottom,
                    left: photo.left,
                    right: photo.right,
                    width: photo.width,
                    height: photo.height,
                    transform: `rotate(${photo.rotation})`,
                    zIndex: 1
                  }}
                >
                  <img
                    src={photo.src}
                    alt="Birthday photo"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{
                      opacity: 0.7,
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                  />
                </div>
              ))}
                  <div 
                    className="text-center px-4 sm:px-8 relative z-10" 
                    style={{ 
                      position: 'absolute',
                      left: index === 0 ? '50%' : 
                             index === 1 ? '50%' : 
                             index === 2 ? '50%' : 
                             index === 3 ? '50%' : '50%',
                      top: index === 0 ? '50%' : 
                           index === 1 ? '45%' : 
                           index === 2 ? '40%' : 
                           index === 3 ? '50%' : '45%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-lg font-sans">
                      {page.title}
                    </h1>
                    <p 
                      className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xs sm:max-w-sm md:max-w-2xl leading-relaxed drop-shadow-md font-sans"
                      dangerouslySetInnerHTML={{ __html: page.message }}
                    />
                  </div>
            </div>
          ))}
        </div>
      </div>

      {/* Swipe hint */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 text-white/40 text-xs text-center">
        <div className="bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
          Swipe or drag to navigate • {currentPage + 1} of {birthdayPages.length}
        </div>
      </div>
    </div>
  );
}
