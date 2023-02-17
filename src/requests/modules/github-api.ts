export interface GithubRepoInfo {
  description: string;
  pushed_at: string;
  [key: string]: unknown
}

/**
 * 获取仓库信息
 */
export async function getGihtubRepoInfo() {
  return useRequest<GithubRepoInfo>({ url: '/repos/flingyp/vue-starter', method: 'GET' })
}
