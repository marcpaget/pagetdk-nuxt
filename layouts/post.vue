<script lang="ts" setup>
const { page: post } = useContent()
defineOgImageScreenshot({
    delay: 1000,
})
</script>

<template>
    <DocsPageLayout>
        <SchemaOrgArticle />
        <div class="mb-3 flex items-center">
            <TopBreadcrumbs v-if="post.breadcrumbs !== false" class="mb-0" />
            <TagList :tags="post.tags" />
        </div>
        <PageTitle :post="post" />
        <PostMeta :post="post" />
        <article>
            <div class="prose-wrap max-w-85ch">
                <Prose>
                    <ContentRenderer :value="post" />
                </Prose>
            </div>
        </article>
    </DocsPageLayout>
</template>

<style>
@media (max-width: 1024px) {
    .toc {
        position: initial !important;
    }
}
.toc {
    top: 160px !important;
}
.docs-page-content {
    grid-template-columns: minmax(50px, 200px) minmax(600px, 1fr) minmax(250px, 250px) !important;
}
</style>
