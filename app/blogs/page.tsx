// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { serverSupabase, publicImageUrl } from "@/lib/supabase-server";

// // // // export const revalidate = 60; // ISR

// // // // export default async function BlogsPage({
// // // //   searchParams,
// // // // }: {
// // // //   searchParams: Record<string, string | string[] | undefined>;
// // // // }) {
// // // //   const supabase = serverSupabase();

// // // //   const q = (searchParams.q as string)?.trim() || "";
// // // //   const cat = (searchParams.cat as string) || "all";

// // // //   // categories for tabs
// // // //   const { data: categories = [] } = await supabase
// // // //     .from("blog_categories")
// // // //     .select("slug,title")
// // // //     .order("title", { ascending: true });

// // // //   // Featured first (max 3), ordered by featured_rank then created_at
// // // //   let featured = [] as any[];
// // // //   {
// // // //     let query = supabase
// // // //       .from("blogs")
// // // //       .select(
// // // //         "id, title, slug, excerpt, thumb_path, hero_path, read_minutes, created_at"
// // // //       )
// // // //       .eq("featured", true)
// // // //       .eq("published", true)
// // // //       .order("featured_rank", { ascending: true, nullsFirst: false })
// // // //       .order("created_at", { ascending: false })
// // // //       .limit(3);

// // // //     if (cat !== "all") {
// // // //       query = query.in("id", supabase.from("blog_category_map") as any);
// // // //     }
// // // //     const { data } = await query;
// // // //     featured = data ?? [];
// // // //   }

// // // //   // Build a list of featured IDs to exclude from latest section
// // // //   const excludeIds = featured.map((f: any) => f.id);

// // // //   // Latest (with search + category). We use a single RPC-style filtered select.
// // // //   let latestQuery = supabase
// // // //     .from("blogs")
// // // //     .select("id, title, slug, excerpt, thumb_path, created_at, read_minutes")
// // // //     .eq("published", true)
// // // //     .not(
// // // //       "id",
// // // //       "in",
// // // //       `(${excludeIds.join(",") || "00000000-0000-0000-0000-000000000000"})`
// // // //     )
// // // //     .order("created_at", { ascending: false })
// // // //     .limit(18);

// // // //   if (q) {
// // // //     latestQuery = latestQuery.ilike("title", `%${q}%`);
// // // //   }

// // // //   if (cat && cat !== "all") {
// // // //     // filter by category via subquery
// // // //     const { data: ids } = await supabase
// // // //       .from("blog_category_map")
// // // //       .select("blog_id")
// // // //       .eq(
// // // //         "category_id",
// // // //         (
// // // //           await supabase
// // // //             .from("blog_categories")
// // // //             .select("id")
// // // //             .eq("slug", cat)
// // // //             .single()
// // // //         ).data?.id || "0"
// // // //       );
// // // //     const set = (ids ?? []).map((r: any) => r.blog_id);
// // // //     if (set.length) latestQuery = latestQuery.in("id", set);
// // // //     else
// // // //       latestQuery = latestQuery.in("id", [
// // // //         "00000000-0000-0000-0000-000000000000",
// // // //       ]);
// // // //   }

// // // //   const { data: latest = [] } = await latestQuery;

// // // //   return (
// // // //     <div className="min-h-screen bg-white">
// // // //       {/* Hero */}
// // // //       <section className="bg-[#8E5BB1] text-white">
// // // //         <div className="mx-auto max-w-6xl px-6 py-12 text-center">
// // // //           <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
// // // //             Inspire. Empower. Act.
// // // //           </h1>
// // // //           <p className="mt-3 text-sm/6 sm:text-base/7 opacity-90">
// // // //             Stories and strategies that inspire your heart, empower your voice,
// // // //             and guide you to take real, confident action.
// // // //           </p>
// // // //           {/* Tabs + Search */}
// // // //           <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
// // // //             <div className="flex flex-wrap items-center justify-center gap-2">
// // // //               <FilterChip
// // // //                 href="/blogs"
// // // //                 label="All post"
// // // //                 active={cat === "all"}
// // // //               />
// // // //               {categories.map((c: any) => (
// // // //                 <FilterChip
// // // //                   key={c.slug}
// // // //                   href={`/blogs?cat=${encodeURIComponent(c.slug)}`}
// // // //                   label={c.title}
// // // //                   active={cat === c.slug}
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //             <form className="sm:ml-auto" action="/blogs">
// // // //               <input
// // // //                 name="q"
// // // //                 defaultValue={q}
// // // //                 placeholder="Search articles"
// // // //                 className="w-full rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm placeholder:text-white/80 focus:bg-white/20 focus:outline-none"
// // // //               />
// // // //               {cat && cat !== "all" && (
// // // //                 <input type="hidden" name="cat" value={cat} />
// // // //               )}
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <section className="mx-auto max-w-6xl px-6 py-8">
// // // //         <h2 className="text-xl font-semibold text-zinc-900">Featured Blogs</h2>
// // // //         <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// // // //           {featured.map((post: any, i: number) => (
// // // //             <FeaturedCard key={post.id} post={post} large={i === 0} />
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       {/* Latest */}
// // // //       <section className="mx-auto max-w-6xl px-6 pb-14">
// // // //         <h2 className="text-xl font-semibold text-zinc-900">Latest Blogs</h2>
// // // //         <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
// // // //           {latest.map((post: any) => (
// // // //             <ArticleCard key={post.id} post={post} />
// // // //           ))}
// // // //         </div>
// // // //         <div className="mt-8 flex justify-center">
// // // //           <Link
// // // //             href="/blogs"
// // // //             className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
// // // //           >
// // // //             Learn more
// // // //           </Link>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }

// // // // function FilterChip({
// // // //   href,
// // // //   label,
// // // //   active,
// // // // }: {
// // // //   href: string;
// // // //   label: string;
// // // //   active?: boolean;
// // // // }) {
// // // //   return (
// // // //     <Link
// // // //       href={href}
// // // //       className={`rounded-full px-3 py-1.5 text-sm ${
// // // //         active ? "bg-white text-[#8E5BB1]" : "bg-white/10 text-white"
// // // //       } hover:bg-white hover:text-[#8E5BB1]`}
// // // //     >
// // // //       {label}
// // // //     </Link>
// // // //   );
// // // // }

// // // // function FeaturedCard({ post, large = false }: { post: any; large?: boolean }) {
// // // //   const url = post.thumb_path
// // // //     ? publicImageUrl(post.thumb_path)
// // // //     : post.hero_path
// // // //     ? publicImageUrl(post.hero_path)
// // // //     : undefined;
// // // //   return (
// // // //     <Link
// // // //       href={`/blogs/${post.slug}`}
// // // //       className={`block rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm hover:shadow-md transition ${
// // // //         large ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
// // // //       }`}
// // // //     >
// // // //       {url && (
// // // //         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
// // // //           <Image
// // // //             src={url}
// // // //             alt={post.title}
// // // //             fill
// // // //             sizes="(min-width:1024px) 33vw, 100vw"
// // // //             className="object-cover"
// // // //           />
// // // //         </div>
// // // //       )}
// // // //       <div className="mt-3 space-y-1">
// // // //         <p className="text-xs text-zinc-500">
// // // //           {new Date(post.created_at).toLocaleDateString()} •{" "}
// // // //           {post.read_minutes ?? 3} min
// // // //         </p>
// // // //         <h3 className="text-base font-semibold text-zinc-900 line-clamp-2">
// // // //           {post.title}
// // // //         </h3>
// // // //         {post.excerpt && (
// // // //           <p className="text-sm text-zinc-600 line-clamp-2">{post.excerpt}</p>
// // // //         )}
// // // //       </div>
// // // //     </Link>
// // // //   );
// // // // }

// // // // function ArticleCard({ post }: { post: any }) {
// // // //   const url = post.thumb_path ? publicImageUrl(post.thumb_path) : undefined;
// // // //   return (
// // // //     <Link
// // // //       href={`/blogs/${post.slug}`}
// // // //       className="block rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm hover:shadow-md transition"
// // // //     >
// // // //       {url && (
// // // //         <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
// // // //           <Image
// // // //             src={url}
// // // //             alt={post.title}
// // // //             fill
// // // //             sizes="(min-width:1024px) 33vw, 100vw"
// // // //             className="object-cover"
// // // //           />
// // // //         </div>
// // // //       )}
// // // //       <div className="mt-3 space-y-1">
// // // //         <p className="text-xs text-zinc-500">
// // // //           {new Date(post.created_at).toLocaleDateString()} •{" "}
// // // //           {post.read_minutes ?? 3} min
// // // //         </p>
// // // //         <h3 className="text-base font-semibold text-zinc-900 line-clamp-2">
// // // //           {post.title}
// // // //         </h3>
// // // //         {post.excerpt && (
// // // //           <p className="text-sm text-zinc-600 line-clamp-2">{post.excerpt}</p>
// // // //         )}
// // // //       </div>
// // // //     </Link>
// // // //   );
// // // // }

// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { serverSupabase, publicImageUrl } from "@/lib/supabase-server";

// // // export const revalidate = 60;              // keep ISR
// // // export const dynamic = "force-dynamic";    // <-- allow searchParams on server

// // // type SP = Record<string, string | string[] | undefined>;

// // // export default async function BlogsPage({
// // //   searchParams,
// // // }: {
// // //   searchParams?: SP;                       // <-- plain object, not Promise
// // // }) {
// // //   const supabase = serverSupabase();

// // //   // Safe reads
// // //   const sp: SP = searchParams ?? {};
// // //   const q = typeof sp.q === "string" ? sp.q.trim() : "";
// // //   const catSlug = typeof sp.cat === "string" ? sp.cat : "all";

// // //   /* ---------- Categories (tabs) ---------- */
// // //   const { data: categoriesRaw } = await supabase
// // //     .from("blog_categories")
// // //     .select("slug,title")
// // //     .order("title", { ascending: true });
// // //   const categories = categoriesRaw ?? [];

// // //   /* ---------- Resolve category -> blog ids ---------- */
// // //   let categoryBlogIds: string[] | null = null;
// // //   if (catSlug !== "all") {
// // //     const { data: catRow } = await supabase
// // //       .from("blog_categories")
// // //       .select("id")
// // //       .eq("slug", catSlug)
// // //       .single();

// // //     if (catRow?.id) {
// // //       const { data: mapRows } = await supabase
// // //         .from("blog_category_map")
// // //         .select("blog_id")
// // //         .eq("category_id", catRow.id);
// // //       categoryBlogIds = (mapRows ?? []).map((r: any) => r.blog_id);
// // //     } else {
// // //       categoryBlogIds = [];
// // //     }
// // //   }

// // //   /* ---------- Featured (max 3) ---------- */
// // //   let featured: any[] = [];
// // //   {
// // //     let qFeat =
// // //       supabase
// // //         .from("blogs")
// // //         .select(
// // //           "id, title, slug, excerpt, thumb_path, hero_path, read_minutes, created_at"
// // //         )
// // //         .eq("published", true)
// // //         .eq("featured", true)
// // //         .order("featured_rank", { ascending: true, nullsFirst: false })
// // //         .order("created_at", { ascending: false })
// // //         .limit(3);

// // //     if (catSlug !== "all") {
// // //       if (categoryBlogIds && categoryBlogIds.length) {
// // //         qFeat = qFeat.in("id", categoryBlogIds);
// // //       } else {
// // //         qFeat = null as any; // nothing in this category
// // //       }
// // //     }

// // //     if (qFeat) {
// // //       const { data } = await qFeat;
// // //       featured = data ?? [];
// // //     }
// // //   }
// // //   const excludeIds = featured.map((f) => f.id);

// // //   /* ---------- Latest (search + category, exclude featured) ---------- */
// // //   let latest: any[] = [];
// // //   {
// // //     let qLatest =
// // //       supabase
// // //         .from("blogs")
// // //         .select("id, title, slug, excerpt, thumb_path, created_at, read_minutes")
// // //         .eq("published", true)
// // //         .order("created_at", { ascending: false })
// // //         .limit(18);

// // //     if (excludeIds.length) {
// // //       qLatest = qLatest.not(
// // //         "id",
// // //         "in",
// // //         `(${excludeIds.map((id) => `'${id}'`).join(",")})`
// // //       );
// // //     }
// // //     if (q) {
// // //       qLatest = qLatest.or(`title.ilike.%${q}%,excerpt.ilike.%${q}%`);
// // //     }
// // //     if (catSlug !== "all") {
// // //       if (categoryBlogIds && categoryBlogIds.length) {
// // //         qLatest = qLatest.in("id", categoryBlogIds);
// // //       } else {
// // //         qLatest = null as any;
// // //       }
// // //     }
// // //     if (qLatest) {
// // //       const { data } = await qLatest;
// // //       latest = data ?? [];
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-white">
// // //       {/* Hero */}
// // //       <section className="bg-[#8E5BB1] text-white">
// // //         <div className="mx-auto max-w-6xl px-6 py-12 text-center">
// // //           <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
// // //             Inspire. Empower. Act.
// // //           </h1>
// // //           <p className="mt-3 text-sm/6 sm:text-base/7 opacity-90">
// // //             Stories and strategies that inspire your heart, empower your voice,
// // //             and guide you to take real, confident action.
// // //           </p>

// // //           {/* Tabs + Search */}
// // //           <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
// // //             <div className="flex flex-wrap items-center justify-center gap-2">
// // //               <FilterChip href="/blogs" label="All post" active={catSlug === "all"} />
// // //               {categories.map((c: any) => (
// // //                 <FilterChip
// // //                   key={c.slug}
// // //                   href={`/blogs?cat=${encodeURIComponent(c.slug)}`}
// // //                   label={c.title}
// // //                   active={catSlug === c.slug}
// // //                 />
// // //               ))}
// // //             </div>
// // //             <form className="sm:ml-auto" action="/blogs">
// // //               <input
// // //                 name="q"
// // //                 defaultValue={q}
// // //                 placeholder="Search articles"
// // //                 className="w-full rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm placeholder:text-white/80 focus:bg-white/20 focus:outline-none"
// // //               />
// // //               {catSlug !== "all" && (
// // //                 <input type="hidden" name="cat" value={catSlug} />
// // //               )}
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Featured */}
// // //       <section className="mx-auto max-w-6xl px-6 py-8">
// // //         <h2 className="text-xl font-semibold text-zinc-900">Featured Blogs</h2>
// // //         <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// // //           {featured.map((post: any, i: number) => (
// // //             <FeaturedCard key={post.id} post={post} large={i === 0} />
// // //           ))}
// // //           {featured.length === 0 && (
// // //             <p className="text-sm text-zinc-500">No featured posts yet.</p>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* Latest */}
// // //       <section className="mx-auto max-w-6xl px-6 pb-14">
// // //         <h2 className="text-xl font-semibold text-zinc-900">Latest Blogs</h2>
// // //         <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
// // //           {latest.map((post: any) => (
// // //             <ArticleCard key={post.id} post={post} />
// // //           ))}
// // //           {latest.length === 0 && (
// // //             <p className="text-sm text-zinc-500">No posts match your filters.</p>
// // //           )}
// // //         </div>
// // //         <div className="mt-8 flex justify-center">
// // //           <Link
// // //             href="/blogs"
// // //             className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
// // //           >
// // //             Learn more
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // /* -------------------- Cards -------------------- */

// // // function FilterChip({
// // //   href,
// // //   label,
// // //   active,
// // // }: {
// // //   href: string;
// // //   label: string;
// // //   active?: boolean;
// // // }) {
// // //   return (
// // //     <Link
// // //       href={href}
// // //       className={`rounded-full px-3 py-1.5 text-sm ${
// // //         active ? "bg-white text-[#8E5BB1]" : "bg-white/10 text-white"
// // //       } hover:bg-white hover:text-[#8E5BB1]`}
// // //     >
// // //       {label}
// // //     </Link>
// // //   );
// // // }

// // // function FeaturedCard({ post, large = false }: { post: any; large?: boolean }) {
// // //   const url = post.thumb_path
// // //     ? publicImageUrl(post.thumb_path)
// // //     : post.hero_path
// // //     ? publicImageUrl(post.hero_path)
// // //     : undefined;

// // //   return (
// // //     <Link
// // //       href={`/blogs/${post.slug}`}
// // //       className={`block rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm hover:shadow-md transition ${
// // //         large ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
// // //       }`}
// // //     >
// // //       {url && (
// // //         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
// // //           <Image
// // //             src={url}
// // //             alt={post.title}
// // //             fill
// // //             sizes="(min-width:1024px) 33vw, 100vw"
// // //             className="object-cover"
// // //           />
// // //         </div>
// // //       )}
// // //       <div className="mt-3 space-y-1">
// // //         <p className="text-xs text-zinc-500">
// // //           {new Date(post.created_at).toLocaleDateString()} •{" "}
// // //           {post.read_minutes ?? 3} min
// // //         </p>
// // //         <h3 className="text-base font-semibold text-zinc-900 line-clamp-2">
// // //           {post.title}
// // //         </h3>
// // //         {post.excerpt && (
// // //           <p className="text-sm text-zinc-600 line-clamp-2">{post.excerpt}</p>
// // //         )}
// // //       </div>
// // //     </Link>
// // //   );
// // // }

// // // function ArticleCard({ post }: { post: any }) {
// // //   const url = post.thumb_path ? publicImageUrl(post.thumb_path) : undefined;

// // //   return (
// // //     <Link
// // //       href={`/blogs/${post.slug}`}
// // //       className="block rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm hover:shadow-md transition"
// // //     >
// // //       {url && (
// // //         <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
// // //           <Image
// // //             src={url}
// // //             alt={post.title}
// // //             fill
// // //             sizes="(min-width:1024px) 33vw, 100vw"
// // //             className="object-cover"
// // //           />
// // //         </div>
// // //       )}
// // //       <div className="mt-3 space-y-1">
// // //         <p className="text-xs text-zinc-500">
// // //           {new Date(post.created_at).toLocaleDateString()} •{" "}
// // //           {post.read_minutes ?? 3} min
// // //         </p>
// // //         <h3 className="text-base font-semibold text-zinc-900 line-clamp-2">
// // //           {post.title}
// // //         </h3>
// // //         {post.excerpt && (
// // //           <p className="text-sm text-zinc-600 line-clamp-2">{post.excerpt}</p>
// // //         )}
// // //       </div>
// // //     </Link>
// // //   );
// // // }

// // "use client";

// // import { createClient } from "@supabase/supabase-js";
// // import { useSearchParams } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";

// // const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// // );

// // export default function BlogsPage() {
// //   const search = useSearchParams();
// //   const q = search.get("q")?.trim() || "";
// //   const cat = search.get("cat") || "all";

// //   const [featured, setFeatured] = useState<any[]>([]);
// //   const [latest, setLatest] = useState<any[]>([]);
// //   const [categories, setCategories] = useState<any[]>([]);

// //   useEffect(() => {
// //     async function load() {
// //       // categories
// //       const { data: cats } = await supabase
// //         .from("blog_categories")
// //         .select("slug,title")
// //         .order("title");
// //       setCategories(cats ?? []);

// //       // featured
// //       let { data: feat } = await supabase
// //         .from("blogs")
// //         .select(
// //           "id,title,slug,excerpt,thumb_path,hero_path,read_minutes,created_at"
// //         )
// //         .eq("published", true)
// //         .eq("featured", true)
// //         .order("featured_rank", { ascending: true })
// //         .limit(3);
// //       setFeatured(feat ?? []);

// //       // latest
// //       let { data: lat } = await supabase
// //         .from("blogs")
// //         .select(
// //           "id,title,slug,excerpt,thumb_path,created_at,read_minutes"
// //         )
// //         .eq("published", true)
// //         .order("created_at", { ascending: false })
// //         .limit(18);
// //       setLatest(lat ?? []);
// //     }
// //     load();
// //   }, [q, cat]);

// //   return (
// //     <div className="min-h-screen bg-white">
// //       <section className="bg-[#8E5BB1] text-white">
// //         <div className="mx-auto max-w-6xl px-6 py-12 text-center">
// //           <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
// //             Inspire. Empower. Act.
// //           </h1>
// //           <p className="mt-3 text-sm/6 sm:text-base/7 opacity-90">
// //             Stories and strategies that inspire your heart, empower your voice,
// //             and guide you to take real, confident action.
// //           </p>
// //         </div>
// //       </section>

// //       <section className="mx-auto max-w-6xl px-6 py-8">
// //         <h2 className="text-xl font-semibold text-zinc-900">Featured Blogs</h2>
// //         <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// //           {featured.map((p) => (
// //             <BlogCard key={p.id} post={p} />
// //           ))}
// //         </div>
// //       </section>

// //       <section className="mx-auto max-w-6xl px-6 pb-14">
// //         <h2 className="text-xl font-semibold text-zinc-900">Latest Blogs</h2>
// //         <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
// //           {latest.map((p) => (
// //             <BlogCard key={p.id} post={p} />
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // function BlogCard({ post }: { post: any }) {
// //   const img =
// //     post.thumb_path || post.hero_path
// //       ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-images/${
// //           post.thumb_path || post.hero_path
// //         }`
// //       : undefined;
// //   return (
// //     <Link
// //       href={`/blogs/${post.slug}`}
// //       className="block rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm hover:shadow-md transition"
// //     >
// //       {img && (
// //         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
// //           <Image src={img} alt={post.title} fill className="object-cover" />
// //         </div>
// //       )}
// //       <div className="mt-3 space-y-1">
// //         <p className="text-xs text-zinc-500">
// //           {new Date(post.created_at).toLocaleDateString()} •{" "}
// //           {post.read_minutes ?? 3} min
// //         </p>
// //         <h3 className="text-base font-semibold text-zinc-900 line-clamp-2">
// //           {post.title}
// //         </h3>
// //         <p className="text-sm text-zinc-600 line-clamp-2">{post.excerpt}</p>
// //       </div>
// //     </Link>
// //   );
// // }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { createClient } from "@supabase/supabase-js";
// import { Navigation } from "@/components/navigation";
// import { FooterSection } from "@/components/footer";

// /* ------------------------ Supabase browser client ------------------------ */
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// const publicImageUrl = (path?: string | null) =>
//   path
//     ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-images/${path}`
//     : undefined;

// /* --------------------------------- Types -------------------------------- */
// type Blog = {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string | null;
//   thumb_path: string | null;
//   hero_path: string | null;
//   created_at: string;
//   read_minutes: number | null;
//   featured?: boolean | null;
//   featured_rank?: number | null;
//   published?: boolean | null;
// };

// type Category = { slug: string; title: string };

// /* ================================ Component =============================== */
// export default function BlogsPageClient() {
//   const router = useRouter();
//   const sp = useSearchParams();
//   const q = sp.get("q")?.trim() || "";
//   const catSlug = sp.get("cat") || "all";

//   const [categories, setCategories] = useState<Category[]>([]);
//   const [featured, setFeatured] = useState<Blog[]>([]);
//   const [latest, setLatest] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);

//   /* ---------------------------- Load categories --------------------------- */
//   useEffect(() => {
//     let mounted = true;
//     supabase
//       .from("blog_categories")
//       .select("slug,title")
//       .order("title", { ascending: true })
//       .then(({ data }) => {
//         if (!mounted) return;
//         setCategories(data ?? []);
//       });
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   /* ------------------- Resolve category → blog ids (client) ------------------ */
//   async function getBlogIdsForCategory(slug: string): Promise<string[] | null> {
//     if (slug === "all") return null; // null = no category filter
//     const { data: catRow } = await supabase
//       .from("blog_categories")
//       .select("id")
//       .eq("slug", slug)
//       .single();
//     if (!catRow?.id) return []; // unknown category → empty
//     const { data: mapRows } = await supabase
//       .from("blog_category_map")
//       .select("blog_id")
//       .eq("category_id", catRow.id);
//     return (mapRows ?? []).map((r: any) => r.blog_id);
//   }

//   /* ---------------------- Load featured + latest posts --------------------- */
//   useEffect(() => {
//     let mounted = true;
//     setLoading(true);

//     (async () => {
//       const categoryBlogIds = await getBlogIdsForCategory(catSlug); // null | [] | [ids...]

//       /* -------- Featured: only when cat = all -------- */
//       let featuredData: Blog[] = [];
//       if (categoryBlogIds === null) {
//         const { data: feat } = await supabase
//           .from("blogs")
//           .select(
//             "id,title,slug,excerpt,thumb_path,hero_path,read_minutes,created_at,featured,featured_rank"
//           )
//           .eq("published", true)
//           .eq("featured", true)
//           .order("featured_rank", { ascending: true, nullsFirst: false })
//           .order("created_at", { ascending: false })
//           .limit(3);
//         featuredData = (feat as Blog[]) ?? [];
//       }

//       // IDs to exclude from latest when category=all
//       const exclude = featuredData.map((f) => f.id);

//       /* ------------------------- Latest (filtered) ------------------------- */
//       let query = supabase
//         .from("blogs")
//         .select(
//           "id,title,slug,excerpt,thumb_path,hero_path,created_at,read_minutes"
//         )
//         .eq("published", true)
//         .order("created_at", { ascending: false })
//         .limit(18);

//       if (categoryBlogIds && categoryBlogIds.length > 0) {
//         query = query.in("id", categoryBlogIds);
//       } else if (
//         Array.isArray(categoryBlogIds) &&
//         categoryBlogIds.length === 0
//       ) {
//         // explicit empty category: force no results by querying impossible id
//         query = query.in("id", ["00000000-0000-0000-0000-000000000000"]);
//       }

//       if (exclude.length > 0 && categoryBlogIds === null) {
//         // exclude featured only in "all" view
//         query = query.not(
//           "id",
//           "in",
//           `(${exclude.map((id) => `'${id}'`).join(",")})`
//         );
//       }

//       if (q) {
//         query = query.or(`title.ilike.%${q}%,excerpt.ilike.%${q}%`);
//       }

//       const [{ data: latestData }] = await Promise.all([query]);

//       if (!mounted) return;
//       setFeatured(featuredData);
//       setLatest((latestData as Blog[]) ?? []);
//       setLoading(false);
//     })();

//     return () => {
//       mounted = false;
//     };
//   }, [q, catSlug]);

//   /* -------------------------- UI: update querystring ------------------------- */
//   const setCat = (slug: string) => {
//     const params = new URLSearchParams(sp.toString());
//     if (slug === "all") params.delete("cat");
//     else params.set("cat", slug);
//     router.push(`/blogs?${params.toString()}`);
//   };

//   const submitSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
//     e.preventDefault();
//     const fd = new FormData(e.currentTarget);
//     const nextQ = (fd.get("q") as string)?.trim() || "";
//     const params = new URLSearchParams(sp.toString());
//     if (nextQ) params.set("q", nextQ);
//     else params.delete("q");
//     router.push(`/blogs?${params.toString()}`);
//   };

//   const showFeatured = useMemo(() => catSlug === "all", [catSlug]);

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-white">
//         <Navigation />
//       <div className="min-h-screen bg-white">
//         {/* Hero */}
//         <section className="bg-[#8E5BB1] text-white">
//           <div className="mx-auto max-w-6xl px-6 py-12 text-center">
//             <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
//               Inspire. Empower. Act.
//             </h1>
//             <p className="mt-3 text-sm/6 sm:text-base/7 opacity-90">
//               Stories and strategies that inspire your heart, empower your
//               voice, and guide you to take real, confident action.
//             </p>

//             {/* Tabs + Search */}
//             <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
//               <div className="flex flex-wrap items-center justify-center gap-2">
//                 <FilterChip
//                   onClick={() => setCat("all")}
//                   label="All post"
//                   active={catSlug === "all"}
//                 />
//                 {categories.map((c) => (
//                   <FilterChip
//                     key={c.slug}
//                     onClick={() => setCat(c.slug)}
//                     label={c.title}
//                     active={catSlug === c.slug}
//                   />
//                 ))}
//               </div>
//               <form className="sm:ml-auto" onSubmit={submitSearch}>
//                 <input
//                   name="q"
//                   defaultValue={q}
//                   placeholder="Search articles"
//                   className="w-full rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm placeholder:text-white/80 focus:bg-white/20 focus:outline-none"
//                 />
//                 {/* keep cat in url; handled by router.push */}
//               </form>
//             </div>
//           </div>
//         </section>

//         {/* Featured */}
//         {showFeatured && (
//           <section className="mx-auto max-w-6xl px-6 py-8">
//             <h2 className="text-xl font-semibold text-zinc-900">
//               Featured Blogs
//             </h2>
//             <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//               {((loading ? Array.from({ length: 3 }) : featured) as Blog[]).map(
//                 (post, i) =>
//                   loading ? (
//                     <CardSkeleton key={i} />
//                   ) : (
//                     <FeaturedCard
//                       key={(post as Blog).id}
//                       post={post as Blog}
//                       large={i === 0}
//                     />
//                   )
//               )}
//               {!loading && featured.length === 0 && (
//                 <p className="text-sm text-zinc-500">No featured posts yet.</p>
//               )}
//             </div>
//           </section>
//         )}

//         {/* Latest */}
//         <section className="mx-auto max-w-6xl px-6 pb-14">
//           <h2 className="text-xl font-semibold text-zinc-900">Latest Blogs</h2>
//           <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {((loading ? Array.from({ length: 6 }) : latest) as Blog[]).map(
//               (post, i) =>
//                 loading ? (
//                   <CardSkeleton key={i} />
//                 ) : (
//                   <ArticleCard key={(post as Blog).id} post={post as Blog} />
//                 )
//             )}
//             {!loading && latest.length === 0 && (
//               <p className="text-sm text-zinc-500">
//                 No posts match your filters.
//               </p>
//             )}
//           </div>
//           <div className="mt-8 flex justify-center">
//             <Link
//               href="/blogs"
//               className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
//             >
//               Learn more
//             </Link>
//           </div>
//         </section>
//       </div>
//       <FooterSection />
//     </div>
//   );
// }

// /* ---------------------------- UI subcomponents ---------------------------- */

// function FilterChip({
//   label,
//   active,
//   onClick,
// }: {
//   label: string;
//   active?: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`rounded-full px-3 py-1.5 text-sm transition ${
//         active
//           ? "bg-white text-[#8E5BB1]"
//           : "bg-white/10 text-white hover:bg-white hover:text-[#8E5BB1]"
//       }`}
//     >
//       {label}
//     </button>
//   );
// }

// function FeaturedCard({
//   post,
//   large = false,
// }: {
//   post: Blog;
//   large?: boolean;
// }) {
//   const url = publicImageUrl(post.thumb_path ?? post.hero_path ?? undefined);
//   return (
//     <Link
//       href={`/blogs/${post.slug}`}
//       className={`block rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition hover:shadow-md ${
//         large ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
//       }`}
//     >
//       {url && (
//         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
//           <Image
//             src={url}
//             alt={post.title}
//             fill
//             sizes="(min-width:1024px) 33vw, 100vw"
//             className="object-cover"
//           />
//         </div>
//       )}
//       <div className="mt-3 space-y-1">
//         <p className="text-xs text-zinc-500">
//           {new Date(post.created_at).toLocaleDateString()} •{" "}
//           {post.read_minutes ?? 3} min
//         </p>
//         <h3 className="line-clamp-2 text-base font-semibold text-zinc-900">
//           {post.title}
//         </h3>
//         {post.excerpt && (
//           <p className="line-clamp-2 text-sm text-zinc-600">{post.excerpt}</p>
//         )}
//       </div>
//     </Link>
//   );
// }

// function ArticleCard({ post }: { post: Blog }) {
//   const url = publicImageUrl(post.thumb_path ?? undefined);
//   return (
//     <Link
//       href={`/blogs/${post.slug}`}
//       className="block rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition hover:shadow-md"
//     >
//       {url && (
//         <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
//           <Image
//             src={url}
//             alt={post.title}
//             fill
//             sizes="(min-width:1024px) 33vw, 100vw"
//             className="object-cover"
//           />
//         </div>
//       )}
//       <div className="mt-3 space-y-1">
//         <p className="text-xs text-zinc-500">
//           {new Date(post.created_at).toLocaleDateString()} •{" "}
//           {post.read_minutes ?? 3} min
//         </p>
//         <h3 className="line-clamp-2 text-base font-semibold text-zinc-900">
//           {post.title}
//         </h3>
//         {post.excerpt && (
//           <p className="line-clamp-2 text-sm text-zinc-600">{post.excerpt}</p>
//         )}
//       </div>
//     </Link>
//   );
// }

// function CardSkeleton() {
//   return (
//     <div className="animate-pulse rounded-2xl border border-zinc-200 bg-white p-3">
//       <div className="mb-3 aspect-[4/3] w-full rounded-xl bg-zinc-200" />
//       <div className="h-3 w-24 rounded bg-zinc-200" />
//       <div className="mt-2 h-4 w-4/5 rounded bg-zinc-200" />
//       <div className="mt-2 h-4 w-3/5 rounded bg-zinc-200" />
//     </div>
//   );
// }

import { Suspense } from "react";
import BlogsClient from "./BlogsClient"; // <-- direct import of the client component

export const dynamic = "error"; // keep static export behavior

export default function Page() {
  return (
    <Suspense fallback={<BlogsSkeleton />}>
      <BlogsClient />
    </Suspense>
  );
}

function BlogsSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <section className="bg-[#8E5BB1] text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <div className="mx-auto h-10 w-72 rounded bg-white/20" />
          <div className="mx-auto mt-3 h-4 w-96 rounded bg-white/10" />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 w-24 rounded-full bg-white/15" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured + Latest skeleton */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="h-6 w-40 rounded bg-zinc-200" />
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="h-6 w-40 rounded bg-zinc-200" />
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-zinc-200 bg-white p-3">
      <div className="mb-3 aspect-[4/3] w-full rounded-xl bg-zinc-200" />
      <div className="h-3 w-24 rounded bg-zinc-200" />
      <div className="mt-2 h-4 w-4/5 rounded bg-zinc-200" />
      <div className="mt-2 h-4 w-3/5 rounded bg-zinc-200" />
    </div>
  );
}

