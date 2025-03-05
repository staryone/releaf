/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ViewImport } from './routes/view'
import { Route as TermImport } from './routes/term'
import { Route as MarketplaceImport } from './routes/marketplace'
import { Route as LearnAndActImport } from './routes/learnAndAct'
import { Route as JualImport } from './routes/jual'
import { Route as ForumdetailImport } from './routes/forum_detail'
import { Route as ForumImport } from './routes/forum'
import { Route as DonationImport } from './routes/donation'
import { Route as CommunityImport } from './routes/community'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ViewRoute = ViewImport.update({
  id: '/view',
  path: '/view',
  getParentRoute: () => rootRoute,
} as any)

const TermRoute = TermImport.update({
  id: '/term',
  path: '/term',
  getParentRoute: () => rootRoute,
} as any)

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

const JualRoute = JualImport.update({
  id: '/jual',
  path: '/jual',
  getParentRoute: () => rootRoute,
} as any)

const ForumdetailRoute = ForumdetailImport.update({
  id: '/forum_detail',
  path: '/forum_detail',
  getParentRoute: () => rootRoute,
} as any)

const ForumRoute = ForumImport.update({
  id: '/forum',
  path: '/forum',
  getParentRoute: () => rootRoute,
} as any)

const DonationRoute = DonationImport.update({
  id: '/donation',
  path: '/donation',
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
    '/donation': {
      id: '/donation'
      path: '/donation'
      fullPath: '/donation'
      preLoaderRoute: typeof DonationImport
      parentRoute: typeof rootRoute
    }
    '/forum': {
      id: '/forum'
      path: '/forum'
      fullPath: '/forum'
      preLoaderRoute: typeof ForumImport
      parentRoute: typeof rootRoute
    }
    '/forum_detail': {
      id: '/forum_detail'
      path: '/forum_detail'
      fullPath: '/forum_detail'
      preLoaderRoute: typeof ForumdetailImport
      parentRoute: typeof rootRoute
    }
    '/jual': {
      id: '/jual'
      path: '/jual'
      fullPath: '/jual'
      preLoaderRoute: typeof JualImport
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
    '/term': {
      id: '/term'
      path: '/term'
      fullPath: '/term'
      preLoaderRoute: typeof TermImport
      parentRoute: typeof rootRoute
    }
    '/view': {
      id: '/view'
      path: '/view'
      fullPath: '/view'
      preLoaderRoute: typeof ViewImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/community': typeof CommunityRoute
  '/donation': typeof DonationRoute
  '/forum': typeof ForumRoute
  '/forum_detail': typeof ForumdetailRoute
  '/jual': typeof JualRoute
  '/learnAndAct': typeof LearnAndActRoute
  '/marketplace': typeof MarketplaceRoute
  '/term': typeof TermRoute
  '/view': typeof ViewRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/community': typeof CommunityRoute
  '/donation': typeof DonationRoute
  '/forum': typeof ForumRoute
  '/forum_detail': typeof ForumdetailRoute
  '/jual': typeof JualRoute
  '/learnAndAct': typeof LearnAndActRoute
  '/marketplace': typeof MarketplaceRoute
  '/term': typeof TermRoute
  '/view': typeof ViewRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/community': typeof CommunityRoute
  '/donation': typeof DonationRoute
  '/forum': typeof ForumRoute
  '/forum_detail': typeof ForumdetailRoute
  '/jual': typeof JualRoute
  '/learnAndAct': typeof LearnAndActRoute
  '/marketplace': typeof MarketplaceRoute
  '/term': typeof TermRoute
  '/view': typeof ViewRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/community'
    | '/donation'
    | '/forum'
    | '/forum_detail'
    | '/jual'
    | '/learnAndAct'
    | '/marketplace'
    | '/term'
    | '/view'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/community'
    | '/donation'
    | '/forum'
    | '/forum_detail'
    | '/jual'
    | '/learnAndAct'
    | '/marketplace'
    | '/term'
    | '/view'
  id:
    | '__root__'
    | '/'
    | '/community'
    | '/donation'
    | '/forum'
    | '/forum_detail'
    | '/jual'
    | '/learnAndAct'
    | '/marketplace'
    | '/term'
    | '/view'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CommunityRoute: typeof CommunityRoute
  DonationRoute: typeof DonationRoute
  ForumRoute: typeof ForumRoute
  ForumdetailRoute: typeof ForumdetailRoute
  JualRoute: typeof JualRoute
  LearnAndActRoute: typeof LearnAndActRoute
  MarketplaceRoute: typeof MarketplaceRoute
  TermRoute: typeof TermRoute
  ViewRoute: typeof ViewRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CommunityRoute: CommunityRoute,
  DonationRoute: DonationRoute,
  ForumRoute: ForumRoute,
  ForumdetailRoute: ForumdetailRoute,
  JualRoute: JualRoute,
  LearnAndActRoute: LearnAndActRoute,
  MarketplaceRoute: MarketplaceRoute,
  TermRoute: TermRoute,
  ViewRoute: ViewRoute,
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
        "/donation",
        "/forum",
        "/forum_detail",
        "/jual",
        "/learnAndAct",
        "/marketplace",
        "/term",
        "/view"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/community": {
      "filePath": "community.tsx"
    },
    "/donation": {
      "filePath": "donation.tsx"
    },
    "/forum": {
      "filePath": "forum.tsx"
    },
    "/forum_detail": {
      "filePath": "forum_detail.tsx"
    },
    "/jual": {
      "filePath": "jual.tsx"
    },
    "/learnAndAct": {
      "filePath": "learnAndAct.tsx"
    },
    "/marketplace": {
      "filePath": "marketplace.tsx"
    },
    "/term": {
      "filePath": "term.tsx"
    },
    "/view": {
      "filePath": "view.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
