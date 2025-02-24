/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MarketplaceImport } from './routes/marketplace'
import { Route as LearnAndActImport } from './routes/learnAndAct'
import { Route as CommunityImport } from './routes/community'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const MarketplaceRoute = MarketplaceImport.update({
  id: '/marketplace',
  path: '/marketplace',
  getParentRoute: () => rootRoute,
} as any)

const LearnAndActRoute = LearnAndActImport.update({
  id: '/learnAndAct',
  path: '/learnAndAct',
  getParentRoute: () => rootRoute,
} as any)

const CommunityRoute = CommunityImport.update({
  id: '/community',
  path: '/community',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/community': {
      id: '/community'
      path: '/community'
      fullPath: '/community'
      preLoaderRoute: typeof CommunityImport
      parentRoute: typeof rootRoute
    }
    '/learnAndAct': {
      id: '/learnAndAct'
      path: '/learnAndAct'
      fullPath: '/learnAndAct'
      preLoaderRoute: typeof LearnAndActImport
      parentRoute: typeof rootRoute
    }
    '/marketplace': {
      id: '/marketplace'
      path: '/marketplace'
      fullPath: '/marketplace'
      preLoaderRoute: typeof MarketplaceImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/community': typeof CommunityRoute
  '/learnAndAct': typeof LearnAndActRoute
  '/marketplace': typeof MarketplaceRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/community': typeof CommunityRoute
  '/learnAndAct': typeof LearnAndActRoute
  '/marketplace': typeof MarketplaceRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/community': typeof CommunityRoute
  '/learnAndAct': typeof LearnAndActRoute
  '/marketplace': typeof MarketplaceRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/community' | '/learnAndAct' | '/marketplace'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/community' | '/learnAndAct' | '/marketplace'
  id: '__root__' | '/' | '/community' | '/learnAndAct' | '/marketplace'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CommunityRoute: typeof CommunityRoute
  LearnAndActRoute: typeof LearnAndActRoute
  MarketplaceRoute: typeof MarketplaceRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CommunityRoute: CommunityRoute,
  LearnAndActRoute: LearnAndActRoute,
  MarketplaceRoute: MarketplaceRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/community",
        "/learnAndAct",
        "/marketplace"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/community": {
      "filePath": "community.tsx"
    },
    "/learnAndAct": {
      "filePath": "learnAndAct.tsx"
    },
    "/marketplace": {
      "filePath": "marketplace.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
