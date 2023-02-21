import { RouteMeta } from 'vue-router'

export interface VAdmireRoute {
  path: string
  name: string
  component?: string
  redirect?: string
  meta?: RouteMeta
  children?: VAdmireRoute[]
}
