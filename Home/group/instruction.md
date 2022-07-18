<scroll-up></scroll-up>

<image-com :src="'/logo.png'" :headerImg="'/header.png'" :width="137" :height="84" :bgWidth="'1920'" :bgHeight="'896'"></image-com>

<div>
  <swiper-bg-instruction></swiper-bg-instruction>
</div>

<div class="content_exhibit" style="background:url('/company_info_bg.png');background-size:100% 100%">
  <div class="main_padding" style="padding-top:22rem">
  <div class="area_content">
    <company-ins></company-ins>
  </div>
  </div>
</div>

<div class="content_exhibit" style="background:url('/map_bg.png');background-size:100% 100%">
  <div class="main_padding mapInstance" style="padding:6rem 4rem 6.2rem">
  <div class="area_content">
    <contact-us></contact-us>
  </div>
  </div>
</div>

<div class="content_exhibit" style="background:url('/widget_bg.png');background-size:100% 100%">
  <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
  <div class="main_padding">
  <div class="area_content">
    <company-info></company-info>
  </div>
  </div>
</div>

<bottom-com/>