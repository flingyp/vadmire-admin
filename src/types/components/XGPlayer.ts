export interface XGPlayerProps {
  url: string;
  volume?: number; // 音量大小
  autoplay?: boolean; // 是否开启自动播放（有浏览器策略限制）
  videoInit?: boolean; // 初始化显示视频首帧
  poster?: string; // 封面图
  pip?: boolean; // 画中画模式
}
