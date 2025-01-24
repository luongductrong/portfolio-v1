<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { UserIcon, MailIcon, MessageSquareIcon, SendIcon, LoaderIcon } from 'lucide-vue-next';

  type SubmitStatus = { type: string; message: string } | null;

  const form = reactive({
    name: '',
    email: '',
    message: '',
  });

  const isSubmitting = ref<boolean>(false);
  const submitStatus = ref<SubmitStatus>(null);

  const handleSubmit = async () => {
    isSubmitting.value = true;
    submitStatus.value = null;

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulated success
    const success = Math.random() > 0.5;

    if (success) {
      submitStatus.value = {
        type: 'success',
        message: 'Your message has been sent successfully!',
      };
      // Reset form
      form.name = '';
      form.email = '';
      form.message = '';
    } else {
      submitStatus.value = {
        type: 'error',
        message: 'There was an error sending your message. Please try again.',
      };
    }

    isSubmitting.value = false;
  };
</script>

<template>
  <div class="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg">
    <form v-on:submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-400 mb-1">Name</label>
        <div class="relative">
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
            placeholder="Your Name"
          />
          <UserIcon class="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-400 mb-1">Email</label>
        <div class="relative">
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
            placeholder="your.email@example.com"
          />
          <MailIcon class="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-400 mb-1">Message</label>
        <div class="relative">
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="4"
            class="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 resize-none"
            placeholder="Your message here..."
          ></textarea>
          <MessageSquareIcon class="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>
      </div>

      <button
        type="submit"
        v-bind:disabled="isSubmitting"
        class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
      >
        <SendIcon v-if="!isSubmitting" class="h-5 w-5 mr-2" />
        <LoaderIcon v-else class="h-5 w-5 mr-2 animate-spin" />
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>

    <div
      v-if="submitStatus"
      v-bind:class="[
        'mt-4 p-3 text-center rounded-md',
        submitStatus.type === 'success' ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200',
      ]"
    >
      {{ submitStatus.message }}
    </div>
  </div>
</template>
