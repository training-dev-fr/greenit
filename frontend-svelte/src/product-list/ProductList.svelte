<script lang="ts" module>
  const page = 1;
  const productList = await fetch(`http://localhost:3000/product/${page}`).then(
    (data) => data.json()
  );
</script>

<script lang="ts">
</script>

<div class="product-list">
  {#each productList as product}
    <div class="product">
      <div class="picture">
        <img src={`http://localhost:3000${product.picture}`} alt="" />
      </div>
      <div class="content">
        <div class="name">
          {product.name}
        </div>
        <div class="ratings">
          <div class="rate">{product.avgRating}</div>
          <div class="vote">{product.countRating}</div>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .product-list {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
  }

  .product-list .product {
    display: flex;
    flex-direction: column;
    border: 1px solid #80808080;
    border-radius: 8px;
  }

  .product .content {
    padding: 8px;
  }
</style>
