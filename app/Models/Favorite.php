<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;
class Favorite extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'movie_id',
    ];


    public static function addFavorite($saveArray) {

        $responseArray = [];
        $queryArray = $saveArray;
        $hasFavorite = self::findFavoriteMovie($queryArray);
        if($hasFavorite) {
            $responseArray['message'] = "Movie already added";
        }
        else {
            $favorite = new Favorite($saveArray);
            $favorite->save();
            $responseArray['message'] = "Movie added to list";
        }

        return $responseArray;
    }

    private static function findFavoriteMovie($queryArray) {


        $favorite = DB::table('favorites')->where($queryArray)->get();
        if(isset($favorite[0]->id)) {
            return true;
        }
        return false;
    }

    public static function getFavoriteListByUserId($userId) {


        $whereArray['user_id'] = $userId;

        $favorites = self::where($whereArray)->get();

        return $favorites;
    }

 }
