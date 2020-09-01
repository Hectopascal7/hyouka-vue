<template>
    <div class="wrapper">
        <div class="page-header page-header-small header-filter">
            <div class="page-header-image" style="background-image: url('img/pages/nicolas-prieto.jpg');"></div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-6 mx-auto text-center">
                        <h1 class="title text-white">
                            技术专栏
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="main main-raised">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <card type="default" class="card-blog">
                            <template slot="image">
                                <img class="img rounded mt-n7" src="img/ill/p7.svg"/>
                            </template>
                            <template slot="body">
                                <h4 class="display-4 text-white">七月号</h4>
                                <p class="lead text-white mt-0">
                                    七月文章...
                                </p>
                                <a href="javascript:;" class="btn btn-link text-white px-0">Read more</a>
                            </template>
                        </card>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <card type="default" class="card-blog">
                            <template slot="image">
                                <img class="img rounded mt-n7" src="img/ill/p22.png"/>
                            </template>
                            <template slot="body">
                                <h4 class="display-4 text-white">八月号</h4>
                                <p class="lead text-white mt-0">
                                    八月文章
                                </p>
                                <a href="javascript:;" class="btn btn-link text-white px-0">Read more</a>
                            </template>
                        </card>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <card type="default" class="card-blog">
                            <template slot="image">
                                <img class="img rounded mt-n7" src="img/ill/p7.svg"/>
                            </template>
                            <template slot="body">
                                <h4 class="display-4 text-white">九月号</h4>
                                <p class="lead text-white mt-0">
                                    九月文章.
                                </p>
                                <a href="javascript:;" class="btn btn-link text-white px-0">Read more</a>
                            </template>
                        </card>
                    </div>
                </div>
            </div>
            <br/>
            <!-- Related Stories -->
            <Blog></Blog>
            <div class="section team-4 bg-default">
                <div class="team-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 mx-auto text-center mb-5">
                                <h3 class="display-3 text-white">The Executive Team</h3>
                                <h4 class="lead text-white">
                                    This is the paragraph where you can write more details about
                                    your team. Keep you user engaged by providing meaningful
                                    information.
                                </h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <card class="card-profile" data-image="profile-image">
                                    <template slot="header">
                                        <div class="card-image">
                                            <base-dropdown menuClasses="dropdown-menu-right">
                                                <div
                                                        slot="title"
                                                        class="nav-link dropdown-toggle text-white"
                                                        data-toggle="dropdown"
                                                >
                                                    <i class="ni ni-settings-gear-65"></i>
                                                </div>
                                                <a class="dropdown-item" href="javascript:;"
                                                >Edit Profile</a
                                                >
                                                <a class="dropdown-item" href="javascript:;"
                                                >Settings</a
                                                >
                                                <a class="dropdown-item" href="javascript:;">Log out</a>
                                            </base-dropdown>
                                            <a href="javascript:;">
                                                <img
                                                        class="img rounded"
                                                        src="img/faces/ali-pazani.jpg"
                                                />
                                            </a>
                                        </div>
                                    </template>
                                    <template slot="body">
                                        <h4 class="display-4 mb-0">Sofia Scarlett</h4>
                                        <p class="lead">UX Designer</p>
                                        <div class="table-responsive">
                                            <ul class="list-unstyled ">
                                                <li class="py-1">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="badge badge-circle badge-info mr-3">
                                                                <i class="ni ni-atom"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-1">Dedicated entrepreneur</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="py-1">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div
                                                                    class="badge badge-circle badge-success mr-3"
                                                            >
                                                                <i class="ni ni-user-run"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-1">Outdors lover</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="py-1">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="badge badge-circle badge-danger mr-3">
                                                                <i class="ni ni-chart-bar-32"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-1">Super friendly support team</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </card>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <card class="card-profile" data-image="profile-image">
                                    <template slot="header">
                                        <div class="card-image">
                                            <base-dropdown menuClasses="dropdown-menu-right">
                                                <div
                                                        slot="title"
                                                        class="nav-link dropdown-toggle text-white"
                                                        data-toggle="dropdown"
                                                >
                                                    <i class="ni ni-settings-gear-65"></i>
                                                </div>
                                                <a class="dropdown-item" href="javascript:;"
                                                >Edit Profile</a
                                                >
                                                <a class="dropdown-item" href="javascript:;"
                                                >Settings</a
                                                >
                                                <a class="dropdown-item" href="javascript:;">Log out</a>
                                            </base-dropdown>
                                            <a href="javascript:;">
                                                <img class="img rounded" src="img/faces/team-5.jpg"/>
                                            </a>
                                        </div>
                                    </template>
                                    <template slot="body">
                                        <h4 class="display-4 mb-0">Dylan Wyatt</h4>
                                        <p class="lead">Team Lead</p>
                                        <div class="table-responsive">
                                            <ul class="list-unstyled ">
                                                <li class="py-1">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="badge badge-circle badge-info mr-3">
                                                                <i class="ni ni-atom"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-1">Dedicated entrepreneur</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="py-1">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div
                                                                    class="badge badge-circle badge-success mr-3"
                                                            >
                                                                <i class="ni ni-user-run"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-1">Urban exploration</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="py-1">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="badge badge-circle badge-danger mr-3">
                                                                <i class="ni ni-chart-bar-32"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-1">
                                                                Able to get good at everything
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </card>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <card class="card-profile" data-image="profile-image">
                                    <template slot="header">
                                        <div class="card-image">
                                            <base-dropdown menuClasses="dropdown-menu-right">
                                                <div
                                                        slot="title"
                                                        class="nav-link dropdown-toggle text-white"
                                                        data-toggle="dropdown"
                                                >
                                                    <i class="ni ni-settings-gear-65"></i>
                                                </div>
                                                <a class="dropdown-item" href="javascript:;"
                                                >Edit Profile</a
                                                >
                                                <a class="dropdown-item" href="javascript:;"
                                                >Settings</a
                                                >
                                                <a class="dropdown-item" href="javascript:;">Log out</a>
                                            </base-dropdown>
                                            <a href="javascript:;">
                                                <img class="img rounded" src="img/faces/atikh.jpg"/>
                                            </a>
                                        </div>
                                    </template>
                                    <template slot="body">
                                        <h4 class="display-4 mb-0">Mila Skylar</h4>
                                        <p class="lead">Content Creator</p>
                                        <div class="table-responsive">
                                            <ul class="list-unstyled ">
                                                <li class="py-1">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="badge badge-circle badge-info mr-3">
                                                                <i class="ni ni-atom"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-1">High quality publication</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="py-1">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div
                                                                    class="badge badge-circle badge-success mr-3"
                                                            >
                                                                <i class="ni ni-user-run"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-1">Storytelling</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="py-1">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="badge badge-circle badge-danger mr-3">
                                                                <i class="ni ni-chart-bar-32"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-1">
                                                                Master of words qualification
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Blog from "./sections/Blogs/Blog3.vue";
    import BaseDropdown from "@/components/BaseDropdown";

    export default {
        components: {
            Blog,
            BaseDropdown
        }
    };
</script>
<style></style>
