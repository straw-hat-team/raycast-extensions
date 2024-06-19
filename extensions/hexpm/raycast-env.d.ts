/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Search Sorting - The sorting of the search results. */
  "search_sorting": "name" | "total_downloads" | "recent_downloads" | "inserted_at" | "updated_at",
  /** Visited Package History Count - How many items to store in your visited package history */
  "visitedPackageHistoryCount": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-packages` command */
  export type SearchPackages = ExtensionPreferences & {}
  /** Preferences accessible in the `create-mix-project` command */
  export type CreateMixProject = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-packages` command */
  export type SearchPackages = {}
  /** Arguments passed to the `create-mix-project` command */
  export type CreateMixProject = {}
}

