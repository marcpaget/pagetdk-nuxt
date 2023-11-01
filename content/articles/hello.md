---
title: 'Ti'
description: 'meta description of the page'
---

<!-- Content of the page -->

## Hej med dig

Din slyngel

```vue {2,4-5} [/components.vue]
<template>
  <input v-model.lazy="message"/>
</template>

<script setup>
import { watch, ref } from 'vue'

const message = ref('');
```
