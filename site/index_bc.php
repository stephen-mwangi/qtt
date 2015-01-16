<!DOCTYPE html>
<html lang="en">
<?php
global $pageName;
$pageName="home";
include('templates/head.php');
?>

<body class="<?php echo $pageName;?>">
  <div id="wrapper">
    <?php include('templates/header.php');?>
    <?php include('templates/navbar.php');?>
    <?php include('templates/snippets/home-hero.php');?>

    <div id="home-content" class="container">
      <!-- Outer top frame items below the banner -->
      <div class="row">
        <div class="col-xs-12 col-md-9 icon-panel">
          <ul class="list-inline text-center row">
            <li class="stats-arrow hidden-xs">
              <img src="<?php echo $home_url; ?>_assets/images/home/icons-left-arrow.png" class="img-responsive">
            </li>
<!--
            <li class="stats-icon">
              <img src="<?php echo $home_url; ?>_assets/images/home/unemployment.png" class="img-responsive">
              <div class="stat">
                <p>Unemployment (Apr)</p>
                <p><span class="arrow-up"></span>4.4%</p>
              </div>
            </li>
            <li class="stats-icon">
              <img src="<?php echo $home_url; ?>_assets/images/home/exports.png" class="img-responsive">
              <div class="stat">
              <p>Exports</p>
              <p><span class="arrow-down"></span>3.2</p>
              </div>
            </li>
            <li class="stats-icon">
              <img src="<?php echo $home_url; ?>_assets/images/home/employment.png" class="img-responsive">
              <div class="stat">
              <p>Employment</p>
              <p><span class="arrow-down"></span>0.1</p>
              </div>
            </li> -->
            <li class="stats-icon">
              <img src="<?php echo $home_url; ?>_assets/images/home/CPI.png" class="img-responsive">
              <div class="stat">
              <p>CPI (Sept)</p>
              <p><span class="arrow-down"></span>6.75%</p>
              </div>
            </li>
            <li class="stats-icon">
              <img src="<?php echo $home_url; ?>_assets/images/home/population.png" class="img-responsive">
              <div class="stat">
                <p>Population (Apr)</p>
                <p><span class="arrow-up"></span>2.2m</p>
              </div>
            </li>
            <li class="stats-icon">
              <img src="<?php echo $home_url; ?>_assets/images/home/growth.png" class="img-responsive">
              <div class="stat">
                <p>Growth (Apr)</p>
                <p><span class="arrow-up"></span>0.2%</p>
              </div>
            </li>
            <li class="stats-icon">
              <img src="<?php echo $home_url; ?>_assets/images/home/labour.png" class="img-responsive">
              <div class="stat">
                <p>Labour Force (Apr)</p>
                <p><span class="arrow-up"></span>0.8m</p>
              </div>
            </li>
            <li class="stats-arrow hidden-xs">
              <img src="<?php echo $home_url; ?>_assets/images/home/icons-right-arrow.png" class="img-responsive">
            </li>
          </ul>
        </div>
        <div class="news-col col-xs-6 col-md-3">
          <div class="full-blue-bg hidden-sm"></div>
          <div class="news row">
            <h2 class="h5 heading bright">News</h2>
            <div class="news-panel">
              <ul class="list-news small">
                <li>
                  <span class="date">14 November 2014</span>
                  <p class="headline"><strong><a>Queensland Treasury and Trade Annual Report 2013-14</a></strong></p>
                </li>
                <li>
                  <span class="date">14 November 2014</span>
                  <p class="headline"><strong><a>Queensland Treasury and Trade Annual Report 2013-14</a></strong></p>
                </li>
                <li>
                  <span class="date">14 November 2014</span>
                  <p class="headline"><strong><a>Queensland Treasury and Trade Annual Report 2013-14</a></strong></p>
                </li>
              </ul>
              <p>
                <a href="#"><span class="list-arrow"></span>View all articles</a>
              </p>
            </div>
          </div>
        </div>
        <div class="media-col col-xs-6 col-md-3 col-md-push-9">
          <div class="media row">
            <h2 class="h5 heading dark">Media</h2>
            <div class="media-panel small">
              <p>Media resources updated monthly</p>
              <ul class="list-links borders strong">
                <li><a href="#">Media Releases</a></li>
                <li><a href="#">Speeches</a></li>
                <li><a href="#">Presentations</a></li>
                <li><a href="#">SPER Debt</a></li>
                <li><a href="#">Economic Data</a></li>
                <li><a href="#">Great Start Grant</a></li>
                <li><a href="#">Publications</a></li>
              </ul>
              <p>For more information contact the media department of Queensland Goverment Department of Treasury and Trade</p>
            </div>
          </div>
        </div>
        <div class="quick-links col-xs-12 col-md-9 border col-md-pull-3">
          <div class="row">
            <h2 class="h5 heading">Quick Links</h2>
            <div class="col-xs-6 col-sm-6">
              <div class="clearfix quick-panel blue">
                <div class="quick-container">
                  <div class="quick-image">
                    <img src="<?php echo $home_url; ?>_assets/images/home/economy.png" class="img-responsive">
                  </div>
                  <div class="quick-caption">
                    <h3>Queensland Economy</h3>
                    <p>For tax agents, accountants and all financial industry employees.</p>
                    <ul class="list-links">
                      <li>Link from here</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-6">
              <div class="clearfix quick-panel blue-2">
                <div class="quick-container">
                  <div class="quick-image">
                    <img src="<?php echo $home_url; ?>_assets/images/home/taxes-royalties-grants.png" class="img-responsive">
                  </div>
                  <div class="quick-caption">
                    <h3>Taxes, royalties and grants</h3>
                    <p>For corporations, small business and sole traders.</p>
                    <ul class="list-links">
                      <li>Link from here</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6">
              <hr class="border-bottom">
              <div class="clearfix quick-panel green">
                <div class="quick-container">
                  <div class="quick-image">
                    <img src="<?php echo $home_url; ?>_assets/images/home/projects-infrastructure.png" class="img-responsive">
                  </div>
                  <div class="quick-caption">
                    <h3>Projects and infrastructure</h3>
                    <p>If you’re a reporter this is where you’ll find all sorts of relevant info</p>
                    <ul class="list-links">
                      <li>Link from here</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-6">
              <hr class="border-bottom">
              <div class="clearfix quick-panel purple">
                <div class="quick-container">
                  <div class="quick-image">
                    <img src="<?php echo $home_url; ?>_assets/images/home/publications.png" class="img-responsive">
                  </div>
                  <div class="quick-caption">
                    <h3>Publications</h3>
                    <p>For corporations, small business and sole traders, this is your portal!</p>
                    <ul class="list-links">
                      <li>Link from here</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /.row -->

      <!-- Three columns of program items -->

      <div class="program-panel row">
        <div class="col-xs-12 col-sm-6 col-md-4 program-wrapper">
          <div class="program-item clearfix">
            <a href="#" class="program-image">
              <span class="program-arrow"></span>
              <img src="<?php echo $home_url; ?>_assets/images/home/strong-choices.png" class="img-responsive">
            </a>
            <div class="program-caption">
              <h5>Strong Choices</h5>
              <p>Some text here about stuff which is max this long</p>
              <a href="#"><span class="list-arrow"></span>More Information</a>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 program-wrapper">
          <div class="program-item clearfix">
            <a href="#" class="program-image">
              <span class="program-arrow"></span>
              <img src="<?php echo $home_url; ?>_assets/images/home/great-start-grant.png" class="img-responsive">
            </a>
            <div class="program-caption">
              <h5>Great Start Grant</h5>
              <p>Some text here about stuff which is max this long</p>
              <a href="#"><span class="list-arrow"></span>More Information</a>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 program-wrapper">
          <div class="program-item clearfix">
            <a href="#" class="program-image">
              <span class="program-arrow"></span>
              <img src="<?php echo $home_url; ?>_assets/images/home/budget.png" class="img-responsive">
            </a>
            <div class="program-caption">
              <h5>Budget</h5>
              <p>Some text here about stuff which is max this long</p>
              <a href="#"><span class="list-arrow"></span>More Information</a>
            </div>
          </div>
        </div>
      </div><!-- /.row -->

      <!-- Three columns of stats items -->
      <div class="data-centre row">
        <h2 class="h5 heading">Queensland Government Data Centre</h2>
        <div class="equal-height-table">
          <div class="col-xs-12 col-md-4 equal-height-cell">
            <h5>Queensland economy at a glance</h5>
            <table class="table small table-treasury">
              <tr><td>Statistic</td><td>Month</td><td>Number</td></tr>
              <tr><td>Statistic</td><td>Month</td><td>Number</td></tr>
              <tr><td>Statistic</td><td>Month</td><td>Number</td></tr>
              <tr><td>Statistic</td><td>Month</td><td>Number</td></tr>
              <tr><td>Statistic</td><td>Month</td><td>Number</td></tr>
              <tr><td>Statistic</td><td>Month</td><td>Number</td></tr>
              <tr><td>Statistic</td><td>Month</td><td>Number</td></tr>
            </table>
          </div>
          <hr class="band visible-sm visible-xs">
          <div class="col-xs-6 col-md-4 equal-height-cell">
            <h5>Latest Releases</h5>
            <ul class="list-links small strong">
              <li><a href="#">Labour force (September)</a></li>
              <li><a href="#">Regional labour force (September)</a></li>
              <li><a href="#">Employment by industry (September)</a></li>
              <li><a href="#">Building approvals (August)</a></li>
              <li><a href="#">Retail trade (August)</a></li>
            </ul>
          </div>
          <hr class="band visible-xxs">
          <div class="col-xs-6 col-md-4 equal-height-cell">
            <h5>Data by category</h5>
            <ul class="list-links small strong">
              <li><a href="#">Demographic</a></li>
              <li><a href="#">Economic</a></li>
              <li><a href="#">Industry &amp; development</a></li>
              <li><a href="#">Regional Queensland</a></li>
              <li><a href="#">Societal</a></li>
            </ul>
          </div>
        </div>
      </div><!-- /.row -->

    </div><!-- /.container -->

  </div>
  <!-- FOOTER -->
  <?php include('templates/footer.php');?>


  <?php include('templates/footer-scripts.php');?>

</body>
</html>