import wirelessHeadphoneImg from '../assets/images/wireless-headphone.webp';
import smartWatchImg from '../assets/images/smart-watch.webp';
import runningShoesImg from '../assets/images/running-shoes.webp';
import backpackImg from '../assets/images/backpack.webp';
import digitalCameraImg from '../assets/images/digital-camera.webp';
import sunglassesImg from '../assets/images/sunglasses.webp';

export const products = [
  {
    id: 1,
    name: 'Wireless Headphone',
    category: 'Electronics',
    price: 350000,
    image: wirelessHeadphoneImg,
    description:
      'Engineered for pure acoustic clarity, this over-ear wireless headphone delivers balanced studio-grade audio, deep resonant bass, and passive noise isolation. Built with plush memory-foam ear cushions, tactile onboard controls, and up to 30 hours of continuous battery life via Bluetooth 5.3.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Accessories',
    price: 550000,
    image: smartWatchImg,
    description:
      'Minimalist aluminum-case smart watch featuring continuous optical heart rate tracking, daily activity metrics, sleep stage analysis, and instant wrist notifications. Paired with a high-contrast edge-to-edge display and durable fluoroelastomer sport band.',
  },
  {
    id: 3,
    name: 'Running Shoes',
    category: 'Fashion',
    price: 450000,
    image: runningShoesImg,
    description:
      'Lightweight engineered flyknit running shoes crafted for responsive energy return and natural foot motion. Combines a breathable seamless knit upper with a flexible dual-density midsole and high-abrasion traction outsole for road running and daily training.',
  },
  {
    id: 4,
    name: 'Backpack',
    category: 'Accessories',
    price: 250000,
    image: backpackImg,
    description:
      'Structured everyday commuter backpack tailored from water-repellent woven canvas. Includes a suspended 15.6-inch padded laptop sleeve, concealed quick-access front pocket, reinforced top carry handle, and ergonomic contoured shoulder straps.',
  },
  {
    id: 5,
    name: 'Digital Camera',
    category: 'Electronics',
    price: 2500000,
    image: digitalCameraImg,
    description:
      'Full-frame mirrorless digital camera system built with a 24.2MP Exmor CMOS sensor, fast hybrid phase-detection autofocus, 5-axis in-body optical image stabilization, and uncompressed 4K video recording. Designed for uncompromising commercial and editorial photography.',
  },
  {
    id: 6,
    name: 'Sunglasses',
    category: 'Fashion',
    price: 175000,
    image: sunglassesImg,
    description:
      'Timeless wayfarer-silhouette sunglasses handcrafted from polished acetate with UV400 polarized glass lenses. Reduces harsh surface glare while offering crisp optical fidelity and balanced all-day comfort.',
  },
];

export default products;
