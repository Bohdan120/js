$(function () {

    // .animate() - виконує задану користувачем анімацію з вибраними елементами.

    // $('div')
    //     .animate({
    //         opacity: 0.30,
    //         marginleft: '150px',          
    // }, 5000)

    // $('div')
    //     .animate({
    //         marginleft: '150px',    
    //         marginTop: '150px',  
    //     },{
    //         queue: false,
    //         duration: 1000
    //     })
    //     .animate({
    //         width: '50px', 
    //         height: '50px'
    //     }, 1000)  

    // $('div')
    // .animate({
    //     opacity: 0.25,
    //     marginLeft: '150px',     
    // }, 5000,
    // function(){
    //     alert('Animation complete!')
    // }) 

    // $('#anim_block')
    //     .on('mouseover', function(){
    //         $('#anim_block').animate({
    //             windth: '300px',
    //             height: '300px'
    //         })
    //     })
    // $('#anim_block')
    // .on('mouseout', function(){
    //     $('#anim_block').animate({
    //         windth: '100px',
    //         height: '21px'
    //     })
    // })
    // $('#show1')
    //     .on('click', function(){
    //         $('p').show()
    //     })

    // $('#show2')
    //     .on('click', function(){
    //         $('#div1').show(2000)
    //     })

    // $('#show3')
    //     .on('click', function(){
    //         $('#div2').show(2000, function(){
    //             $('#div2>span').show()
    //         })
    //     })

    // $('p').on('click', function(){
    //     $('div:hidden:first').fadeIn(1000)
    // })

    // $('div').on('click', function(){
    //     $(this).fadeOut(1000)
    // })
    
    // $('div').on('click', function(){
    //     $(this).fadeTo(100, 0.33)
    // })

    // $('#btn').on('click', function(){
    //     $('#block').animate({
    //         width: '100px',
    //         height: '100px',
    //         marginLeft: '50px'

    //     })
    // })

    // $('#block_task3').animate({
    //     left: '200px',
    //     top: '200px'
    // }, 2000); 

    // $('#getPhotos').on('click', function(){
    //     $.ajax({
    //         type: "GET",
    //         url: "https://jsonplaceholder.typicode.com/photos",
    //         dataType: "json",
    //         success: function(data){
             
    //             $('#photosContainer').empty();
                
    //             data.forEach(function(photo){
                  
    //                 let photoElement = '<div>';
    //                 photoElement += '<h3>' + photo.title + '</h3>';
    //                 photoElement += '<img src="' + photo.thumbnailUrl + '" alt="' + photo.title + '">';
    //                 photoElement += '</div>';

                   
    //                 $('#photosContainer').append(photoElement);
    //             });
    //         }
    //     });
    // });
    var userCollection = []
    var userPostsCollection = []

    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      type: 'GET',
      dataType: 'json',
      success: function(users) {
        userCollection = users
        populateUserDropdown(userCollection)
      },
      error: function(error) {
        console.error('Error:', error)
      }
    });

    $('#userSelect').on('change', function() {  
      var selectedUserId = $(this).val()
      displayUserDetails(selectedUserId)
    });

    $('#getPosts').on('click', function() {
      var selectedUserId = $('#userSelect').val();    
      getPosts(selectedUserId)
    });

    function populateUserDropdown(users) {
      var userSelect = $('#userSelect')

      for (var i = 0; i < users.length; i++) {
        var user = users[i]
        userSelect.append('<option value="' + user.id + '">' + user.name + '</option>')
      }

      userSelect.trigger('change')
    }

    function displayUserDetails(userId) {
      var userDetailsTable = $('#userDetailsTable')
      userDetailsTable.empty()
      $('#postContainer').empty()

      var selectedUser = userCollection.find(function(user) {
        return user.id == userId
      })

      if (selectedUser) {
        userDetailsTable.append('<tr><th>ID</th><td>' + selectedUser.id + '</td></tr>')
        userDetailsTable.append('<tr><th>Name</th><td>' + selectedUser.name + '</td></tr>')
        userDetailsTable.append('<tr><th>Username</th><td>' + selectedUser.username + '</td></tr>')
        userDetailsTable.append('<tr><th>Email</th><td>' + selectedUser.email + '</td></tr>')
        userDetailsTable.append('<tr><th>Address</th><td>' + selectedUser.address.street + ', ' +
          selectedUser.address.suite + ', ' + selectedUser.address.city + ', ' + selectedUser.address.zipcode + '</td></tr>')
        userDetailsTable.append('<tr><th>Phone</th><td>' + selectedUser.phone + '</td></tr>')
        userDetailsTable.append('<tr><th>Website</th><td>' + selectedUser.website + '</td></tr>')
        userDetailsTable.append('<tr><th>Company</th><td>' + selectedUser.company.name + ', ' +
          selectedUser.company.catchPhrase + ', ' + selectedUser.company.bs + '</td></tr>')
      } else {
        userDetailsTable.append('<tr><td colspan="2">User not found</td></tr>')
      }
    }

    function getPosts(userId) {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'GET',
        dataType: 'json',
        success: function(posts) {
          userPostsCollection = posts;
          displayUserPosts(userId);
        },
        error: function(error) {
          console.error('Error:', error);
        }
      });
    }

    function displayUserPosts(userId) {   
      let postContainer = $('#postContainer')
      postContainer.empty()

      var userPosts = userPostsCollection.filter(function(post) {
        return post.userId == userId;
      })

      if (userPosts.length > 0) {
        for (var i = 0; i < userPosts.length; i++) {
          var post = userPosts[i]
          postContainer.append('<h3>' + post.title + '</h3>')
          postContainer.append('<p>' + post.body + '</p>')
          postContainer.append('<hr>')
        }
      } else {
        postContainer.append('<p>No posts found for the selected user</p>')
      }
    }

})
