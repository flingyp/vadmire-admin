/**
 * fetchUrl: 请求的地址
 * fetchKey: 获取的字段
 * checkTimeout: 多久检查一次
 * execute: 是否立即执行
 * reloadCallback: 更新执行回调
 */
interface DeployReloadOptions {
  fetchUrl: string;
  fetchKey: string;
  checkTimeout?: number;
  execute?: boolean;
  reloadCallback?: () => void;
}

export class DeployReload {
  private fetchUrl: string;
  private fetchKey: string;
  private stashBuildTime: number = 0;
  private checkTimeout: number; // Second
  private execute: boolean = false;
  private intervalInstance: any;

  private reloadCallback: () => void;

  constructor(options: DeployReloadOptions) {
    this.fetchUrl = options.fetchUrl;
    this.fetchKey = options.fetchKey;
    this.checkTimeout = options.checkTimeout || 5;
    this.execute = options.execute || false;

    this.reloadCallback = options.reloadCallback || (() => {});

    this.init();
  }

  private init() {
    this.getBuildTimeValue().then((value) => {
      this.stashBuildTime = value;
    });

    const timeoutValue = this.checkTimeout * 1000;
    const callback = this.checkBuildTime.bind(this);
    this.execute && callback();
    this.intervalInstance = setInterval(callback, timeoutValue);

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        console.log('22222');
        this.execute && callback();

        this.intervalInstance = setInterval(callback, timeoutValue);
      } else {
        clearInterval(this.intervalInstance);
      }
    });
  }

  private async getBuildTimeValue() {
    const response = await fetch(`${this.fetchUrl}?time=${new Date().getTime()}`);
    const result = (await response.json()) as Record<string, any>;
    return result[this.fetchKey] as number;
  }

  private async checkBuildTime() {
    const currentBuildTime = await this.getBuildTimeValue();
    if (currentBuildTime > this.stashBuildTime) {
      this.reload();
    }
  }

  private reload() {
    this.reloadCallback();
  }
}
