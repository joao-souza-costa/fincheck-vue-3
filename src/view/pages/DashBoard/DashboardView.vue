<template>
  <div class="h-full w-full p-4 md:p-8 md:pt-6 flex flex-col gap-4">
    <header class="h-12 flex flex-row items-center justify-between">
      <fincheck-logo class="h-6 text-teal-900" />
      <user-menu />
    </header>
    <main class="flex-1 flex flex-col md:flex-row gap-4 h-full">
      <div class="w-full md:w-1/2">
        <accounts-view />
      </div>
      <div class="w-full md:w-1/2">
        <transactions-view />
      </div>
    </main>

    <base-fab />

    <account-modals />
    <transaction-modals />
  </div>
</template>

<script setup lang="ts">
import FincheckLogo from '@/view/components/FincheckLogo.vue'
import UserMenu from '@/view/components/UserMenu.vue'
import AccountsView from './components/AccountsView.vue'
import TransactionsView from './components/TransactionsView.vue'
import BaseFab from './components/Base/BaseFab.vue'
import AccountModals from './components/Modals/AccountModals.vue'
import { useBalanceProvider } from './providers/balanceProvider'
import { useModalsProvider } from './providers/modalsProvider'
import TransactionModals from './components/Modals/TransactionModals.vue'

useBalanceProvider()
useModalsProvider()
</script>

<style scoped></style>
