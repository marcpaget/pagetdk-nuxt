<template>
    <div />
</template>

<script setup>
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const posts = await prisma.post.findMany()
const test = ref()
</script>
