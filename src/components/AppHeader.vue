<template>
  <header class="header">
    <!-- Tob Bar-->

    <nav class="navbar navbar-expand-lg">
      <div class="search-area">
        <div class="search-area-inner d-flex align-items-center justify-content-center">
          <div class="close-btn"><i class="icon-close"></i></div>
          <form action="#">
            <div class="form-group">
              <input type="search" name="search" id="search" placeholder="What are you looking for?">
              <button type="submit" class="submit"><i class="icon-search"></i></button>
            </div>
          </form>
        </div>
      </div>
      <div class="container-fluid">
        <!-- Navbar Header  --><a href="http://hub.ondrejsvestka.cz/1-0/index.html" class="navbar-brand"><img
        src="img/logo.png" alt="..."></a>
        <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i
          class="fa fa-bars"></i></button>
        <!-- Navbar Collapse -->
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="" class="nav-link active">Shop</a></li>

          </ul>
          <div class="right-col d-flex align-items-lg-center flex-column flex-lg-row">
            <!-- Search Button-->
            <div class="search"><i class="icon-search"></i></div>
            <!-- User Dropdown-->
            <div class="user dropdown show"><a id="userdetails" href="https://example.com" data-toggle="dropdown"
                                               aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i
              class="icon-profile"></i></a>
              <ul aria-labelledby="userdetails" class="dropdown-menu">
                <li class="dropdown-item"><a href="#">Profile       </a></li>
                <li class="dropdown-item"><a href="#">Orders       </a></li>
                <li class="dropdown-divider"></li>
                <li class="dropdown-item"><a href="#">Logout       </a></li>
              </ul>
            </div>
            <!-- Cart Dropdown-->
            <cart-drop-down></cart-drop-down>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
  import CartDropDown from './CartDropdown'
  export default {
    name: 'app-header',
    components: {
      CartDropDown
    }
  }
</script>
