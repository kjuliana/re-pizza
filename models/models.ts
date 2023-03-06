export interface ProductFromProducts {
    size?: {};
    foodValue?: {};
    allergens: string;
    allergensCanContain: string;
    isBaked: boolean;
    ingredients?: [];
    toppings?: [];
    id: string;
    name: string;
    description: string;
    category: string;
    images?:[];
    type: number;
    maxCount?: any;
    slots?: [];
    sizeGroup?: number;
    dough?: number;
    pizzaId: string;
    metaProductId: string;
    sizeSchemeId: string;
    doughSchemeId: string;
}

export type ProductsByCategory = {
    [categoryId: string]: Product[]
}


export interface Image {
    type: number;
    url: string;
}

export interface Size {
    measure: number;
    value: number;
}

export interface ShoppingItem {
    id: string;
    price: number;
    productId: string;
    dough?: number,
    size?: number
}

export interface Product {
    id: string;
    name: string;
    description: string;
    translitName: string;
    priority: number;
    type: number;
    category: string;
    menuCategoryId: string;
    image: Image;
    size: Size;
    shoppingItems: ShoppingItem[];
    customShoppingItems: [];
}

export interface MenuCategory {
    id: string;
    displayType: string;
    name: string;
    position: number;
    analyticsName: string;
}

export interface SizeGroup {
    size: number;
    name: string;
    shortName: string;
}

export interface SizeScheme {
    id: string;
    sizeGroups: SizeGroup[];
}

export interface DoughType {
    dough: number;
    name: string;
    shortName: string;
}

export interface DoughScheme {
    id: string;
    doughTypes: DoughType[];
}

export interface ProductSchemes {
    sizeSchemes: SizeScheme[];
    doughSchemes: DoughScheme[];
}

export interface IDodoAPIResponse {
    items: Product[];
    hiddenItems: [];
    popular: [];
    products: ProductFromProducts[];
    prioritizedCategories: string[];
    menuCategories: MenuCategory[];
    productSchemes: ProductSchemes;
    imageResizeMode: number;
}

export interface IBanan {
    id: number,
    name: string,
    price: number,
    count: number,
    image: string,
}

export type IBasket = {
    [productId: number]: number;
}


export interface IUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
}

export interface ServerResponse<T> {
    total_count: number;
    incomplete_results: boolean;
    items: T[];
}

export interface IOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface IRepo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: IOwner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_discussions: boolean;
    forks_count: number;
    mirror_url?: any;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license?: any;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean;
    topics: string[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}


