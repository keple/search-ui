<template>
  <div class="wrapper-xs h-100">
    <div class=" wrapper h-100">
      <div class="accordion list-group no-border">
        <div class="accordion-item list-group-item no-padding">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              INFO
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body no-padding">
              <ul class="list-group">
                <li class="list-group-item pointer"><a href="/info">inf</a></li>
                <li class="list-group-item pointer"><a href="/summary">summary</a></li>
                <li class="list-group-item pointer">third</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item  list-group-item no-padding">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              PROFILE
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body no-padding">
              <ul class="list-group">
                <li class="list-group-item pointer">first</li>
                <li class="list-group-item pointer">second</li>
                <li class="list-group-item pointer">third</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="list-group-item text-start">
          NO-ACCORDIAN
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style lang="scss" scoped>
  .no-border {
    border-style:none;
  }
</style>