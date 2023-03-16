<template>
<div class="container">
    <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="logo.png" alt="" width="200" height="72" />
        <h2>Kassa</h2>

    </div>
    <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Varukorg</span>
                <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3 sticky-top">
  <li v-for="(product, ) in cart" :key="product.id" class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 class="my-0">{{ product.name }}</h6>
      <span class="text-muted">Antal produkter: {{ product.quantity }}</span>
    </div>
    <span class="text-muted"> {{ product.cost }}kr</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <span>Total kostnad: {{ totalCost }} kr</span>

  </li>
</ul>
<form class="card p-2">
    <div class="input-group">
      <div class="input-group-append">
        <router-link to="/!" class="btn btn-primary">Tillbaks till sidan</router-link>
      </div>
    </div>
  </form>
        </div>
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Faktura Adress</h4>
            <form class="needs-validation" novalidate="">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">Förnamn</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                        <div class="invalid-feedback"> Valid first name is required. </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Efternamn</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                        <div class="invalid-feedback"> Valid last name is required. </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="username">Användarnamn</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">@</span>
                        </div>
                        <input type="text" class="form-control" id="username" placeholder="Användarnamn" required="" />
                        <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email">Email <span class="text-muted">(Valfritt)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="DU@example.com" />
                    <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                </div>
                <div class="mb-3">
                    <label for="address">Adress</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 bla bla vägen" required="" />
                    <div class="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                <div class="mb-3">
                    <label for="address2">Adress 2 <span class="text-muted">(Optional)</span></label>
                    <input type="text" class="form-control" id="address2" placeholder="Lägenhet" />
                </div>
                <div class="row">
                    <div class="col-md-5 mb-3">
                        <label for="country">Lan</label>
                        <select class="custom-select d-block w-100" id="country" required="">
                            <option value="">Välj...</option>
                            <option>Sverige</option>
                        </select>
                        <div class="invalid-feedback"> Välj ett giltigt land. </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="state">Stad</label>
                        <select class="custom-select d-block w-100" id="state" required="">
                            <option value="">Välj...</option>
                            <option>Göteborg</option>
                        </select>
                        <div class="invalid-feedback"> Välj ett giltigt Stad. </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required="" />
                        <div class="invalid-feedback"> Zip kod nödvändigt. </div>
                    </div>
                </div>
                <hr class="mb-4" />
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="same-address" />
                    <label class="custom-control-label" for="same-address">Leveransadressen är densamma som min faktureringsadress</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="save-info" />
                    <label class="custom-control-label" for="save-info">Spara denna information till nästa gång
</label>
                </div>
                <hr class="mb-4" />
                <h4 class="mb-3">Betalnings sätt</h4>
                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="" />
                        <label class="custom-control-label" for="credit">Kredit kort</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="" />
                        <label class="custom-control-label" for="debit">Debit kort</label>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Namn på kortet</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
                        <small class="text-muted">Fullständigt namn som visas på kortet</small>
                        <div class="invalid-feedback"> Namn på kortet är nodvändigt. </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">kredit kort nummer</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required="" />
                        <div class="invalid-feedback"> Kredit kort nummer är nödvändigt. </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Utgångsdatum</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
                        <div class="invalid-feedback"> Utgångsdatum är nödvändig. </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
                        <div class="invalid-feedback"> Säkerhetskoden är nödvändig.
                </div>
                <hr class="mb-4" />
                <button class="btn btn-success btn-lg btn-block" type="submit">Betala för dina produkter!</button>
            </div></div>
          </form>
        </div>
    </div>
    <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>Om oss</h4>
          <p>
            Vi är en vintageklädbutik som är dedikerad till att tillhandahålla hög kvalitet
            kläder för män och kvinnor.
          </p>
        </div>
        <div class="col-md-6">
          <h4>Kontakta oss</h4>
          <p>E-post: contact@sellit.com</p>
          <p>Telefon: 555-555-5555</p>
          <p>Adress: 123 Main St, Anytown USA</p>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cart', 'totalCost', 'cartCount', ])
  },
  methods: {
    removeProduct(index) {
      this.$store.dispatch('removeProduct', index);
    },
    clearCart() {
      this.$store.dispatch('clearCart');
    },
    checkout(){
    this.$router.push("/Kassa");
  },
  }

};
(function() {
var forms = document.querySelectorAll('.needs-validation');
Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
})();
</script>
