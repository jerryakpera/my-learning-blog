<template>
  <div class="book-card">
    <div class="book-card__content q-pa-sm">
      <div class="book-card__image">
        <q-img
          class="image"
          width="100px"
          height="150px"
          :src="imageURL || fallbackImage"
        />
      </div>

      <div class="book-card__review q-px-sm">
        <div class="text-h6 font-body text-weight-bold">
          {{ book.name }}
        </div>
        <div class="text-body2 font-link text-weight-medium">
          {{ book.author }}
        </div>

        <q-separator spaced="md" />

        <div class="text-body1 font-body text-weight-medium">
          {{ book.review }}
        </div>

        <div class="flex justify-end q-mt-md">
          <q-btn
            rounded
            no-caps
            class="btn"
            target="_blank"
            label="View Book"
            :href="book.link"
            style="letter-spacing: 0.7px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["book"]);

const fallbackImage =
  "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";

const imageURL = computed(() => props.book?.image?.url);
</script>

<style lang="scss" scoped>
.book-card {
  width: 100%;
  border-radius: 10px;
  background-color: #ede0d4;
  color: #472d30;

  &__content {
    display: flex;
    align-items: flex-start;

    .book-card__image {
      padding: 2px;
      border-radius: 10px;

      img,
      .image {
        border-radius: 10px;
        box-shadow: 3px 4px 5px rgba($color: #472d30, $alpha: 0.2);
      }
    }

    .btn {
      color: #ede0d4;
      background-color: #472d30;
    }
  }
}
</style>
