<template>
  <component
      :is="href ? 'a' : 'button'"
      :href="href"
      :download="download"
      @click="handleClick"
      class="text-xs sm:text-sm px-3 sm:px-6 py-1 sm:py-1.5 bg-gray-900 text-yellow-400 font-mono font-bold
  rounded-sm border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900
  transition duration-300 shadow-[4px_4px_0_theme(colors.yellow.400)]
  hover:shadow-none hover:translate-x-1 hover:translate-y-1"
  >
    {{ label }}
  </component>
</template>

<script setup>
const props = defineProps({
  label: String,
  href: String,
  onClick: Function,
  download: String,
  class: String
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  if (props.href && props.download) {
    event.preventDefault();

    const link = document.createElement('a');
    link.href = props.href;
    link.setAttribute('download', props.download);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (props.onClick) {
    props.onClick();
  }
  emit("click");
};
</script>
