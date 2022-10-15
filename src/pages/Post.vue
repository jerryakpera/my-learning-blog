<template>
  <q-page class="q-px-xl" v-if="post && post.title">
    <div class="q-px-md">
      <div class="text-h6">
        {{ post.title }}
      </div>
      <div class="text-h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        voluptatem excepturi tenetur veniam pariatur. Delectus beatae modi,
        eligendi unde sequi temporibus facilis dignissimos eaque? Eum iure sunt
        numquam itaque sequi adipisci possimus natus dolores. Culpa dignissimos
        impedit alias, illo sed cumque eligendi delectus incidunt voluptatem
        maiores mollitia, accusamus deleniti aspernatur.

        {{ content }}
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

import { usePostsStore } from "src/stores/posts-store";

const props = defineProps(["slug"]);

const $q = useQuasar();
const router = useRouter();
const postsStore = usePostsStore();

const post = computed(() => postsStore.post);

const getContentFragment = () => {};

const content = computed(() => {
  const data = postsStore.post.content.raw.children.map((typeObj, index) => {
    const children = typeObj.childred.map((item, itemIndex) =>
      getContentFragment(itemIndex, item.text)
    );

    return getContentFragment(index, children, typeObj, typeObj.type);
  });
});

const fetchPost = async (slug) => {
  const postResult = await postsStore.getPostBySlug(slug);
  if (!postResult) {
    $q.notify({
      message: "Post could not be loaded",
      color: "dark",
    });

    router.go(-1);
    return;
  }

  postsStore.post = postResult;
};

onMounted(async () => {
  $q.loading.show();

  await fetchPost(props.slug);

  $q.loading.hide();
});
</script>
