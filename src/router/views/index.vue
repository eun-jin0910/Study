<template>
  <div class="content-container">
    <h1>📝 정보처리기사 실기</h1>

    <div class="wrap">
      <v-row no-gutters align="center" justify="space-between">
        <v-chip-group class="py-1" column>
          <v-chip
            outlined
            :color="chapter === 0 && !showMarked ? 'primary' : ''"
            @click="(chapter = 0), (showMarked = false)"
            >전체</v-chip
          >
          <v-chip
            outlined
            :color="chapter === 0 && showMarked ? 'primary' : ''"
            @click="(chapter = 0), (showMarked = true)"
            >선택</v-chip
          >
          <v-chip
            v-for="(items, idx) in data"
            :key="idx"
            outlined
            :color="items.chapter === chapter ? 'primary' : ''"
            class="mr-2"
            @click="(chapter = items.chapter), (showMarked = false)"
            >{{ items.chapter }}
          </v-chip>
        </v-chip-group>

        <div>
          <span style="font-size: 0.8rem"
            >총 <strong>{{ count }}</strong> 개</span
          >
          <v-btn icon @click="refresh">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </div>
      </v-row>

      <div
        v-for="(items, idx) in data.filter(
          e => e.chapter === chapter || chapter === 0
        )"
        :key="idx"
        dense>
        <v-row
          no-gutters
          class="pt-5 pb-4"
          align="center"
          justify="space-between">
          <strong>
            {{ items.chapter + ". " + items.title }}
          </strong>
          <span style="font-size: 0.8rem">
            <strong>{{
              showMarked
                ? items.items.filter(e => e.mark).length
                : items.items.length
            }}</strong>
            개</span
          >
        </v-row>

        <v-row
          no-gutters
          v-for="(item, subIdx) in items.items"
          :key="subIdx"
          :class="!showMarked || item.mark ? 'my-1' : ''"
          align="center"
          justify="center">
          <template v-if="!showMarked || item.mark">
            <v-col>
              <v-row no-gutters style="flex-wrap: nowrap">
                <v-chip
                  @click="toggleMark(item)"
                  :color="item.mark ? 'pink' : ''"
                  :outlined="!item.mark"
                  style="
                    justify-content: center;
                    min-width: 24px !important;
                    max-width: 24px !important;
                    height: 24px;
                    aspect-ratio: 1;
                    border-radius: 100%;
                    font-size: 0.7rem;
                    padding: 0;
                  "
                  class="mr-2"
                  :style="{ color: item.mark ? 'white' : '' }"
                  >{{ subIdx + 1 }}</v-chip
                >
                <span style="font-size: 0.9rem">
                  {{ item.question }}
                </span>
              </v-row>
            </v-col>

            <v-col cols="3" align="end" justify="center">
              <template v-if="item.show">
                <v-row
                  no-gutters
                  align="center"
                  justify="end"
                  style="min-height: 36px">
                  <strong style="font-size: 0.75rem">
                    {{ item.answer }}
                  </strong>

                  <v-btn :elevation="0" @click="toggleAnswer(item)" icon small>
                    <v-icon small color="red">mdi-close</v-icon>
                  </v-btn>
                </v-row>
              </template>
              <template v-else>
                <v-btn :elevation="0" @click="toggleAnswer(item)">
                  <v-icon small left color="green">mdi-check</v-icon>
                  <span style="font-size: 0.8rem">정답</span>
                </v-btn>
              </template>
            </v-col>
            <v-col cols="12">
              <v-divider class="mt-1" style="opacity: 0.5" />
            </v-col>
          </template>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data/data.js";
export default {
  name: "IndexPage",
  components: {},
  data() {
    return {
      data: data,
      count: 0,
      chapter: 0,
      showMarked: false,
    };
  },
  watch: {
    showMarked() {
      if (this.showMarked) {
        this.count = 0;
        this.data.forEach(chapter => {
          chapter.items.forEach(item => {
            if (item.mark) {
              this.count++;
            }
          });
        });
      } else {
        this.count = 0;
        this.data.forEach(chapter => {
          this.count += chapter.items.length;
        });
      }
    },
  },
  mounted() {
    this.count = 0;
    this.data.forEach(chapter => {
      this.count += chapter.items.length;
    });
  },
  methods: {
    toggleAnswer(item) {
      this.$set(item, "show", !item.show);
    },

    toggleMark(item) {
      this.$set(item, "mark", !item.mark);
    },

    refresh() {
      this.data.forEach(chapter => {
        chapter.items.forEach(item => {
          item.show = false;
          // item.mark = false;
        });
      });
    },
  },
};
</script>

<style lang="scss">
.content-container {
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;

  .wrap {
    margin: 20px 10px;
  }
}
</style>
