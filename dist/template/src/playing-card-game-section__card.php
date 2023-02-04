<template id="playing-card-game-section__card__template">
  <ul class="playing-card-game-section__card-list">
    <?php for ($i = 1; $i <= 13; $i++) : ?>
    <li id="card<?php echo $i ?>" class="card">
      <p class="name__front-side"></p>
      <p class="name__back-side"></p>
      <div class="check"></div>
      <p class="num"></p>
    </li>
    <?php endfor; ?>
  </ul>
</template>
