<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

use App\Models\Favorite;
class MovieController extends Controller {



      private static $movie_api_url = 'https://api.themoviedb.org/3/movie/';
      // private static $endpoint_suffix = '?api_key='.env('MOVIE_DB_KEY');
      private static $genre_api_url = 'https://api.themoviedb.org/3/genre/';

      public  function getLatestMovie($movieId) {

            try {

                  $url = self::$movie_api_url.$movieId.'?api_key='.env('MOVIE_DB_KEY');

                  $guzzleClient = new \GuzzleHttp\Client([
                      'base_uri' => $url,
                      'verify' => base_path('cacert.pem'),
                  ]);

                  $response = $guzzleClient->request('GET', $url, ['verify' => false]);
                  $responseArray  = json_decode($response->getBody()->getContents(), true);

                  $returnArray['success'] = true;

                  $returnArray['movie_id'] = $responseArray['id'];
                  $returnArray['title'] = $responseArray['original_title'];
                  $returnArray['poster'] = $responseArray['backdrop_path'];
                  $returnArray['overview'] = $responseArray['overview'];
                  $returnArray['release'] = $responseArray['release_date'];

                  
            } catch (Exception $e) {
                  $returnArray['error'] = true;
                  $returnArray['message'] = "ERROR!!!". $e->getMessage();
            }


          
            return \Response::json($returnArray);
      }


      public  function getMovieGenres() {

            try {

                  $url = self::$genre_api_url.'/movie/list'.'?api_key='.env('MOVIE_DB_KEY');

                  $guzzleClient = new \GuzzleHttp\Client([
                      'base_uri' => $url,
                      'verify' => base_path('cacert.pem'),
                  ]);

                  $response = $guzzleClient->request('GET', $url, ['verify' => false]);
                  $responseArray  = json_decode($response->getBody()->getContents(), true);

                  // $num = 12;
                  // $randomGenres = array_rand( $responseArray['genres'], $num );

                  foreach ($responseArray['genres'] as $key => $value) {

                        $temparray['id'] = $value['id'];
                        $temparray['name'] = $value['name'];
                        $temparray['poster'] = self::getGenrePoster($value['id']);
                        $returnArray['data'][] = $temparray;

                        
                  }

                  $returnArray['success'] = true;


            } catch (Exception $e) {
                  $returnArray['error'] = true;
                  $returnArray['message'] = "ERROR!!!". $e->getMessage();
            }


          
            return \Response::json($returnArray);
      }


      public  function getMoviesByCategory($category ) {
           

            try {

                  $queryString = "&&page=1";

                  if($category === "popular") {
                        $url = self::$movie_api_url.'popular?api_key='.env('MOVIE_DB_KEY').$queryString;
                  }

                  if($category === "upcoming") {
                        $url = self::$movie_api_url.'upcoming?api_key='.env('MOVIE_DB_KEY').$queryString;
                  }

                  if($category === "list") {
                        $url = self::$account_api_url.'/'.$account_id.'/lists?api_key='.env('MOVIE_DB_KEY').$queryString;
                  }

                  $guzzleClient = new \GuzzleHttp\Client([
                      'base_uri' => $url,
                      'verify' => base_path('cacert.pem'),
                  ]);

                  $requestArray = [];
                  $requestArray['verify'] = false;

                  $response = $guzzleClient->request('GET', $url, $requestArray);
                  $responseArray  = json_decode($response->getBody()->getContents(), true);


                  $returnArray['success'] = true;
                  $returnArray['data'] = [];

                  $num = 20;
                  $randomMovies = array_rand( $responseArray['results'], $num );


                  foreach ($randomMovies as $key => $value) {
                        $temparray['id'] = $responseArray['results'][$value]['id'];
                        $temparray['title'] = $responseArray['results'][$value]['original_title'];
                        $temparray['poster'] = $responseArray['results'][$value]['poster_path'];;
                        $returnArray['data'][] = $temparray;
                  }
                  
            } catch (Exception $e) {
                  $returnArray['error'] = true;
                  $returnArray['message'] = "ERROR!!!". $e->getMessage();
            }

            return \Response::json($returnArray);
      }

      private  function getGenrePoster($genreId) {


           $url = 'https://api.themoviedb.org/3/discover/movie?api_key='.env('MOVIE_DB_KEY').'&with_genres='.$genreId;

            try {

                  $guzzleClient = new \GuzzleHttp\Client([
                      'base_uri' => $url,
                      'verify' => base_path('cacert.pem'),
                  ]);

                  $requestArray = [];
                  $requestArray['verify'] = false;

                  $response = $guzzleClient->request('GET', $url, $requestArray);
                  $responseArray  = json_decode($response->getBody()->getContents(), true);

                  $randomNum = array_rand($responseArray['results']);

                  $genreMovie = $responseArray['results'][$randomNum];

                  $posterUrlPath  = $genreMovie['backdrop_path'];


            } catch (Exception $e) {
                  $returnArray['error'] = true;
                  $returnArray['message'] = "ERROR!!!". $e->getMessage();
                  return $returnArray;
            }     

            return $posterUrlPath;
      }


      public  function addMovieToFavoriteList($movieId, $userId = null) {

            $userId = 1;
            if(!isset($userId)) {
                  $userId = \Auth::user()->id;
            }

            $responseArray = [];

            try {
                  $saveArray['user_id'] = $userId;
                  $saveArray['movie_id'] = $movieId;
                  $dbResponse = Favorite::addFavorite($saveArray);
                  $responseArray['success'] = $dbResponse['message'];
                  
            } catch (Exception $e) {
                  $responseArray['error'] = "ERROR!!! " . $e->getMessage();
            }

            return \Response::json($responseArray);

      }

      public  function getFavoriteList($userId = null) {

            $userId = 1;
            if(!isset($userId)) {
                  $userId = \Auth::user()->id;
            }


            try {
                  $dbResponse = Favorite::getFavoriteListByUserId($userId);

                  $returnArray = [];

                  foreach($dbResponse as $key => $value) {
                        $url = self::$movie_api_url.$value->movie_id.'?api_key='.env('MOVIE_DB_KEY');

                        try {

                              $guzzleClient = new \GuzzleHttp\Client([
                                  'base_uri' => $url,
                                  'verify' => base_path('cacert.pem'),
                              ]);

                              $requestArray = [];
                              $requestArray['verify'] = false;

                              $response = $guzzleClient->request('GET', $url, $requestArray);
                              $responseArray  = json_decode($response->getBody()->getContents(), true);

                              $temparray['id'] = $responseArray['id'];
                              $temparray['title'] = $responseArray['original_title'];
                              $temparray['poster'] = $responseArray['poster_path'];
                              $returnArray[] = $temparray;


                        } catch (Exception $e) {
                              $returnArray['error'] = true;
                              $returnArray['message'] = "ERROR!!!". $e->getMessage();
                        } 

                  }
                  
            } catch (Exception $e) {
                  $returnArray['error'] = "ERROR!!! " . $e->getMessage();
            }

            return \Response::json($returnArray);

      }




      public  function searchMovies($querystring) {

            $url = 'https://api.themoviedb.org/3/search/movie?query='.$querystring.'&api_key='.env('MOVIE_DB_KEY');
            $returnArray = [];
            
            try {

                  $guzzleClient = new \GuzzleHttp\Client([
                      'base_uri' => $url,
                      'verify' => base_path('cacert.pem'),
                  ]);

                  $requestArray = [];
                  $requestArray['verify'] = false;

                  $response = $guzzleClient->request('GET', $url, $requestArray);
                  $responseArray  = json_decode($response->getBody()->getContents(), true);

                  foreach($responseArray['results'] as $movie) {
                        $temparray['id'] = $movie['id'];
                        $temparray['title'] = $movie['original_title'];
                        $temparray['poster'] = $movie['poster_path'];
                        $returnArray[] = $temparray;
                  }


            } catch (Exception $e) {
                  $returnArray['error'] = true;
                  $returnArray['message'] = "ERROR!!!". $e->getMessage();
                  return $returnArray;
            }     

            return $returnArray;

      }
}
